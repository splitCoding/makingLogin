const models = require('../../models');

exports.get_join_main = ( req, res ) =>{
  res.render('join/join.html');
}

exports.post_join_main = ( req, res ) =>{
  try{
      req.body.thumbnail = (req.file)? req.file.filename : "";
      models.User.create(req.body).then(()=>{ //create의 콜럼들의 이름과 req.body 요소들의 값이 같을 경우 req.body라고 써도됨
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