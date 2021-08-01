const { Router } = require('express');
const router = Router();
const ctrl = require('./login.ctrl');
const passport = require('../../middleware/passport-local');

router.get('/', ctrl.get_login_main);

router.post('/', passport.authenticate('local',{
  failureRedirect : '/login',
  failureFlash : true
})
, ctrl.post_login_main);

router.get('/fail', ctrl.get_login_fail);

module.exports = router;