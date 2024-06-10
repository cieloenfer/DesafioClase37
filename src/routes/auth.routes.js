const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();

router.post('/forgot-password', authController.forgotPassword);
router.post('/reset/:token', authController.resetPassword);

module.exports = router;

