const { createUser, userLogin } = require('../controller/usercontroller');

const express = require('express');
const router = express.Router();

router.post('/RegistUser', createUser);
router.post('/loginUser', userLogin);

module.exports = router;
