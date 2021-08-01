const passport = require("passport");

exports.get_login_main = ( req, res ) =>{
  res.render('login/login.html', { flashMessage : req.flash().error });
}

exports.post_login_main = ( req, res ) =>{
  res.redirect('/mainpage');
}

exports.get_login_fail = ( req, res ) =>{
  res.send('login fail');
}