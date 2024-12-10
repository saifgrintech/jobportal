const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register User
const registerUser = async (req, res) => {
  const { fullName, email, password, role, countryCode, phoneNumber } = req.body;

  try {
    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists!' });
    }

    // Restrict certain roles
    if (role === 'superAdmin') {
      return res.status(403).json({ message: 'SuperAdmin registration is not allowed.' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      role,
      countryCode,
      phoneNumber,
    });

    return res.status(201).json({
      message: 'User registered successfully!',
      user: {
        fullName: newUser.fullName,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const loginUser = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // Check for user
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found:', email);  // Log email for debugging
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Password mismatch for user:', email);  // Log mismatch for debugging
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Validate role
    if (user.role !== role) {
      console.log(`Role mismatch: expected ${role}, got ${user.role}`);  // Log role mismatch for debugging
      return res.status(400).json({ message: 'Invalid role for this user' });
    }

    // Generate token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRATION || '1h' }
    );

    return res.status(200).json({
      message: 'Login successful!',
      token,
      user: {
        userId: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Error in loginUser:', error);
    res.status(500).json({ message: 'Server error' });
  }
};



// Get All Users
const getAllUsers = async (req, res) => {
  try {
    // Fetch all users
    const users = await User.find({}, '-password'); // Exclude password field for security

    return res.status(200).json({
      message: 'Users retrieved successfully!',
      users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get User by ID
const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    // Fetch user by ID
    const user = await User.findById(id, '-password'); // Exclude password field for security

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({
      message: 'User retrieved successfully!',
      user,
    });
  } catch (error) {
    console.error(error);

    // Handle invalid MongoDB ID error
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  registerUser, loginUser, getAllUsers, getUserById,
};


