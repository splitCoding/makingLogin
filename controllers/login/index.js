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
      userid : req.body.userid, 
      password : passwordHash(password)
    }
  })
  if(!user){
    return done(null, false, )
  } else {
    return done(null, user.dataValues) //user.dataValues가 serializeUser의 user파라미터에 전달
  }
}
));

passport.serializeUser((user, done)=>{
  console.log('serializeUser work');
  done( null, user ); //최종적으로 세션에 담기는 내용
})

passport.deserializeUser((user, done)=>{
  console.log('deserializeUser work');
  done( null, user );
})

router.get('/', ctrl.get_login_main);

router.post('/', passport.authenticate('local',{
  failureRedirect : '/login/fail'
})
, ctrl.post_login_main);

router.get('/success', ctrl.get_login_success);

router.get('/fail', ctrl.get_login_fail);

module.exports = router;