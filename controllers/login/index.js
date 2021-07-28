const { Router } = require('express');
const router = Router();
const ctrl = require('./login.ctrl');

router.get('/', ctrl.get_login_main);

router.post('/', ctrl.post_login_main);

router.get('/success', ctrl.get_login_success);

router.get('/fail', ctrl.get_login_fail);

module.exports = router;