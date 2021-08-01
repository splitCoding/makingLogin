const { Router } = require('express');
const router = Router();
const models = require('../../models');
const passport_fb = require('../../middleware/passport-facebook');
const passport_ka = require('../../middleware/passport-kakao');


//facebook

router.get( '/facebook', passport_fb.authenticate('facebook',{ scope : 'email' }) );

router.get( '/facebook/callback', passport_fb.authenticate('facebook',{
    successRedirect : '/mainpage',
    failureRedirect : '/auth/facebook/fail'
  })
);

router.get( '/facebook/fail', (req, res) => {
  res.send('facebook login fail');
} );

//kakao

router.get('/kakao', passport_ka.authenticate('kakao', { state: 'myStateValue' }));

router.get('/kakao/callback', passport_ka.authenticate('kakao', {
  failureRedirect : '/auth/kakao/fail'
}), function (req, res) {
  res.redirect('/mainpage')
})

router.get('/kakao/fail',(req,res)=>{
  res.send(`kakao login fail`);
})

module.exports = router;