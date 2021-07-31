const passwordHash = require('../helpers/passwordHash');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id : { type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true },
    userid : { 
      type : DataTypes.STRING,
      allowNull : false
    },
    username : { 
      type : DataTypes.STRING,
      allowNull : false 
    },
    password : {
      type : DataTypes.STRING
    },
    loginType : {
      type : DataTypes.STRING
    },
    thumbnail : {
      type : DataTypes.STRING
    }
  },{
    tableName : 'User'
  })

  User.beforeCreate((user,_)=>{
    user.password = passwordHash(user.password);
  })

  return User
}