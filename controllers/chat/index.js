const { Router } = require('express');
const router = Router();
const csrfProtection = require('../../middleware/csrf');

router.get('/', csrfProtection, (req, res)=>{
  res.render('chat/chat.html',{ message : req.csrfToken() });
})

module.exports = router;