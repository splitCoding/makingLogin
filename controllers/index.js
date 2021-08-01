const express = require('express');
const router = express.Router();
const login = require('./login');
const join = require('./join');
const auth = require('./auth');
const chat = require('./chat');
const body = require('./body');

router.use('/login',login);

router.use('/join',join);

router.use('/auth',auth);

router.use('/chat',chat);

router.use('/body',body);

module.exports = router;