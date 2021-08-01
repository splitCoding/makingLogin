const models = require('../../models')

exports.get_body = (req, res)=>{
  res.render('body/index.html');
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
  res.redirect('/login/success');
}