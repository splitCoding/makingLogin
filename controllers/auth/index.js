const { Router } = require('express');
const router = Router();
const models = require('../../models');
const passport_fb = require('../../middleware/passport-facebook');
const passport_ka = require('../../middleware/passport-kakao');


//facebook

router.get( '/facebook', passport_fb.authenticate('facebook',{ scope : 'email' }) );

router.get( '/facebook/callback', passport_fb.authenticate('facebook',{
    successRedirect : '/auth/facebook/success',
    failureRedirect : '/auth/facebook/fail'
  })
);

router.get( '/facebook/success', (req, res) => {
  res.send(`${req.user.username}님 반갑습니다`);
} );

router.get( '/facebook/fail', (req, res) => {
  res.send('facebook login fail');
} );

//kakao

router.get('/kakao', passport_ka.authenticate('kakao', { state: 'myStateValue' }));

router.get('/kakao/callback', passport_ka.authenticate('kakao', {
  failureRedirect : '/auth/kakao/fail'
}), function (req, res) {
  res.redirect('/auth/kakao/success')
})

router.get('/kakao/success',(req,res)=>{
  res.send(`${req.user.username}님 반갑습니다`);
})

router.get('/kakao/fail',(req,res)=>{
  res.send(`kakao login fail`);
})

module.exports = router;