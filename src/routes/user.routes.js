const express = require('express');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();

router.put('/premium/:uid', authMiddleware.isAdmin, userController.changeUserRole);

module.exports = router;
