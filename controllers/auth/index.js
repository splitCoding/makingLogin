const { Router } = require('express');
const router = Router();
const models = require('../../models');
const passport = require('../../middleware/passport-facebook');

router.get( '/facebook', passport.authenticate('facebook',{ scope : 'email' }) );

router.get( '/facebook/callback', passport.authenticate('facebook',{
    successRedirect : '/auth/facebook/success',
    failureRedirect : '/auth/facebook/fail'
  })
);

router.get( '/facebook/success', (req, res) => {
  res.send(req.user);
} );

router.get( '/facebook/fail', (req, res) => {
  res.send('facebook login fail');
} );

module.exports = router;