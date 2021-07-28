const express = require('express');
const router = express.Router();
const login = require('./login');
const join = require('./join');

router.use('/login',login);

router.use('/join',join);

module.exports = router;