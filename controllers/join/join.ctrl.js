exports.get_join_main = ( req, res ) =>{
  res.render('join/join.html');
}

exports.post_join_main = ( req, res ) =>{
  console.log(req.body);
  res.redirect('/join/success');
}

exports.get_join_success = ( req, res ) =>{
  res.send('join success');
}

exports.get_join_fail = ( req, res ) =>{
  res.send('join fail');
}