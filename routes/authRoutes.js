const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const authControllers = require('../controllers/authController');

router.post('/login',authMiddleware, authControllers.login);
router.get('/protected', authMiddleware, authControllers.getProtectedData);

module.exports = router;
