const express = require('express');
const router = express.Router();
const login = require('./login');
const join = require('./join');
const auth = require('./auth');
const oauth = require('./oauth');

router.use('/login',login);

router.use('/join',join);

router.use('/auth',auth);

router.use('/oauth',oauth);

module.exports = router;