const passwordHash = require('../helpers/passwordHash');

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
    id : { type : Sequelize.INTEGER, primaryKey : true, autoIncrement : true },
    userid : { type : Sequelize.STRING },
    username : { type : Sequelize.STRING },
    password : { type : Sequelize.STRING }
  },{
    tableName : 'User'
  })

  User.beforeCreate((user,_)=>{
    user.password = passwordHash(user.password);
  })

  return User
}