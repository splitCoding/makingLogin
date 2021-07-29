const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const dotenv = require('dotenv');
const models = require('../models');
dotenv.config();

passport.use(new FacebookStrategy({
  clientID : process.env.FACEBOOK_APPID,
  clientSecret : process.env.FACEBOOK_SECRETCODE,
  callbackURL : process.env.SITE_DOMAIN + '/auth/facebook/callback',
  profileFields : ['id', 'displayName','photos', 'email']
},
async ( accessToken, refreshToken, profile, done ) => {
  try{

    const userid = `fb_${profile.id}`;
    const exist = await models.User.count({
      where : {
        userid
      }
    })

    if(!exist){
      user = await models.User.create({
        userid : userid,
        username : profile.displayName,
        password : 'facebook'
      })
    } else {
      user = await models.User.findOne({
        where : {
          userid
        }
      })
    }
    
    return done(null, user);

  } catch(e){

  }
}
));

passport.serializeUser((user, done)=>{
  done(null, user);
});

passport.deserializeUser((user, done)=>{
  done(null, user);
});

module.exports = passport;