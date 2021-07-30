const { Router } = require('express');
const router = Router();
const models = require('../../models');
const passport = require('../../middleware/passport-kakao');


// express 앱 설정

router.get('/login', passport.authenticate('kakao', { state: 'myStateValue' }));

router.get('/', passport.authenticate('kakao'), function (req, res) {
  res.send(req.user)
})

module.exports = router;