const models = require('../../models')

exports.get_body = async (req, res)=>{
  if(req.isAuthenticated()){
    const user = await models.User.findOne({
      where : {
        id : req.params.id
      },
      include : [
        'Body'
      ]
    });
    res.render('body/index.html',{ user });
  } else { 
    res.send('<script>alert("로그인 후 사용가능합니다"); location.href = "/"</script>');
  }
}

exports.post_body = async (req, res)=>{
  const top = req.body.weight;
  const bottom = Math.pow((req.body.height / 100),2);

  const user = await models.User.findByPk(req.params.id);
  await user.createBody({
    weight : req.body.weight,
    height : req.body.height,
    bmi : (top/bottom).toFixed(2),
    userid : req.body.userid
  })
  res.redirect(`/body/${req.params.id}`)
}

exports.get_record_delete = async (req, res)=>{
  await models.body.destroy({
    where : {
      user_id : req.params.user_id,
      id : req.params.record_id
    }
  });
  res.redirect('/body/'+req.params.user_id);
}