const { Router } = require('express');
const router = Router();
const ctrl = require('./join.ctrl');

router.get('/', ctrl.get_join_main);

router.post('/', ctrl.post_join_main);

router.get('/success', ctrl.get_join_success);

router.get('/fail', ctrl.get_join_fail);

module.exports = router;