exports.get_login_main = ( req, res ) =>{
  res.render('main.html');
}

exports.post_login_main = ( req, res ) =>{
  res.redirect('/login/success');
}

exports.get_login_success = ( req, res ) =>{
  res.send('login success');
}

exports.get_login_fail = ( req, res ) =>{
  res.send('login fail');
}