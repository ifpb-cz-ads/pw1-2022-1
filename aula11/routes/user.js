const express = require('express');
const router = express.Router();

// Importa o controller
const userController = require('../controllers/userController');

router.post('/register', userController.userCreate);
router.post('/login', userController.userLogin);

module.exports = router;
