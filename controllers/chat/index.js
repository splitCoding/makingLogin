const { Router } = require('express');
const router = Router();
const csrfProtection = require('../../middleware/csrf');

router.get('/', csrfProtection, (req, res)=>{
  if(req.isAuthenticated()){
    res.render('chat/chat.html');
  } else {
    res.send('<script>alert("로그인이 필요합니다"); \location.href="/login"</script>');
  }
})

module.exports = router;