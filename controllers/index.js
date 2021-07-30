const express = require('express');
const router = express.Router();
const login = require('./login');
const join = require('./join');
const auth = require('./auth');

router.use('/login',login);

router.use('/join',join);

router.use('/auth',auth);

module.exports = router;