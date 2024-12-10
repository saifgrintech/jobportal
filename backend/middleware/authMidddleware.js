const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust the path to your User model

const authenticateUser = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from Bearer <token>
    console.log("Token received:", token);  // Log the token for debugging
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
      console.log("Decoded token:", decoded);  // Log the decoded token for debugging
  
      const user = await User.findById(decoded.userId).select('-password'); // Use `decoded.userId` instead of `decoded.id`
      if (!user) {
        return res.status(401).json({ message: 'Invalid token or user not found' });
      }
  
      req.user = user; // Attach user to request object
      next();  // Proceed to the next middleware or route handler
    } catch (error) {
      console.error('JWT Error:', error); // Log error details
      res.status(401).json({ message: 'Token is invalid or expired' });
    }
};
  

module.exports = authenticateUser;
