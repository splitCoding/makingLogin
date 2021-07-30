const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passwordHash = require('../helpers/passwordHash');
const models = require('../models');

passport.use(new LocalStrategy({
  usernameField : 'userid',
  passwordField : 'password',
  passReqToCallback : true
}, async (req, userid, password, done)=>{
  const user = await models.User.findOne({
    where : {
      userid : req.body.userid, 
      password : passwordHash(password)
    },
    attributes : {exclude : ['password']}
  })
  if(!user){
    return done(null, false, { message : '로그인에 실패하였습니다'})
  } else {
    if(user.loginType === 'facebook'){
      return done(null, false, { message : '페이스북 로그인으로 로그인해주세요'})
    } else {
      return done(null, user.dataValues) //user.dataValues가 serializeUser의 user파라미터에 전달
    }
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

module.exports = passport;