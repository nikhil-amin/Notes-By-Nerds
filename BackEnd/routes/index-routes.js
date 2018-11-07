const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/userController');

router.post('/register', ctrlUser.register);

module.exports = router;