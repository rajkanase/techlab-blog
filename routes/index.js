const express = require('express');
const userController = require('../controllers/user-controller');
const router = express.Router();

// user routes
router.post('/register', userController.registerUser);

module.exports = router;
