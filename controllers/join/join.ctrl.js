const models = require('../../models');

exports.get_join_main = ( req, res ) =>{
  res.render('join/join.html');
}

exports.post_join_main = ( req, res ) =>{
  try{
    models.User.create({
      userid : req.body.userid,
      username : req.body.username,
      password : req.body.password
    }).then(()=>{
      res.redirect('/join/success');
    })
  } catch(e){

  }
  
}

exports.get_join_success = ( req, res ) =>{
  res.send('join success');
}

exports.get_join_fail = ( req, res ) =>{
  res.send('join fail');
}