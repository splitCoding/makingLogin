require('dotenv').config();

const passport = require('passport');
const models = require('../models');

const appKey = process.env.KA_CLIENTID;
const appSecret = process.env.KA_SECRET;
const callback = process.env.KA_CALLBACK;

var KakaoStrategy = require('passport-kakao').Strategy;

passport.use(
  new KakaoStrategy(
    {
      clientID: appKey,
      clientSecret: appSecret,
      callbackURL: callback
    },
    async function (accessToken, refreshToken, params, profile, done) {
      // authorization 에 성공했을때의 액션
      console.log(profile);
      save(accessToken, refreshToken, profile);
      const userid = `ka_${profile.id}`;
      const exist = await models.User.count({
        where : {
          userid
        }
      })
      if(!exist){
        models.User.create({
          userid,
          username : profile.username,
          password : 'kakao',
          loginType : 'kakao'
        })
      } else {
        user = await models.User.findOne({
          where : {
            userid
          }
        })
      }
      return done(null, user)
    }
  )
)
passport.serializeUser(function (user, done) {
  done(null, user)
})
passport.deserializeUser(function (obj, done) {
  done(null, obj)
})

// 사용자 구현 부분
function save() {
  //save 로직 구현
}

module.exports = passport;
