exports.get_join_main = ( req, res ) =>{
  res.send('join/mainpage');
}

exports.post_join_main = ( req, res ) =>{
  res.redirect('/login/sucess');
}

exports.get_join_success = ( req, res ) =>{
  res.send('join success');
}

exports.get_join_fail = ( req, res ) =>{
  res.send('join fail');
}