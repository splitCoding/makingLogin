const { Router } = require('express');
const router = Router();

router.get('/', ( req, res ) =>{
    res.render('mainpage/index.html',{ user : req.user })
});

module.exports = router;