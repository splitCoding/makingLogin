const passport = require("passport");

exports.get_login_main = ( req, res ) =>{
  res.render('login/login.html', { flashMessage : req.flash().error });
}

exports.post_login_main = ( req, res ) =>{
  res.redirect('/login/success');
}

exports.get_login_success = ( req, res ) =>{
  res.render('login/success.html',{ user : req.user })
}

exports.get_logout = (req, res)=>{
  req.logout();
  res.redirect('/login');
}

exports.get_login_fail = ( req, res ) =>{
  res.send('login fail');
}