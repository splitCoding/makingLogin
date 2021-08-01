const express = require('express');
const router = express.Router();
const login = require('./login');
const mainpage = require('./mainpage');
const logout = require('./logout');
const join = require('./join');
const auth = require('./auth');
const chat = require('./chat');
const body = require('./body');
const isAuthenticated = require('../helpers/isAuthenticated');

router.use('/login',login);

router.use('/mainpage',isAuthenticated ,mainpage);

router.use('/logout',logout);

router.use('/join',join);

router.use('/auth',auth);

router.use('/chat', isAuthenticated , chat);

router.use('/body', isAuthenticated , body);

module.exports = router;