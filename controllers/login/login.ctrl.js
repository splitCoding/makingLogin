exports.get_login_main = ( req, res ) =>{
  res.send('login/mainpage');
}

exports.post_login_main = ( req, res ) =>{
  res.redirect('/login/sucess');
}

exports.get_login_success = ( req, res ) =>{
  res.send('login success');
}

exports.get_login_fail = ( req, res ) =>{
  res.send('login fail');
}