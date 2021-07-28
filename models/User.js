module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    id : { type : Sequelize.INTEGER, primaryKey : true, autoIncrement : true },
    user_id : { type : Sequelize.STRING },
    username : { type : Sequelize.STRING },
    password : { type : Sequelize.STRING },
    password2 : { type : Sequelize.STRING }
  },{
    tablename : 'user'
  })
  return User
}