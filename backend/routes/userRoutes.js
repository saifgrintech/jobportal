const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getAllUsers, getUserById, } = require('../controllers/userController'); 

// Route to register a user
router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/users', getAllUsers);

router.get('/users/:id', getUserById);

module.exports = router; 
