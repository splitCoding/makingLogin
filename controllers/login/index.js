const { Router } = require('express');
const router = Router();
const ctrl = require('./login.ctrl');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passwordHash = require('../../helpers/passwordHash');
const models = require('../../models');

passport.use(new LocalStrategy({
  usernameField : 'userid',
  passwordField : 'password',
  passReqToCallback : true
}, async (req, userid, password, done)=>{
  const user = await models.User.findOne({
    where : {
      userid, password : passwordHash(password)
    }
  })
  if(!user){
    return done(null, false)
  } else {
    return done(null, user.dataValues)
  }
}
));

router.get('/', ctrl.get_login_main);

router.post('/', ctrl.post_login_main);

router.get('/success', ctrl.get_login_success);

router.get('/fail', ctrl.get_login_fail);

module.exports = router;