const passwordHash = require('../helpers/passwordHash');
const moment = require('moment');

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
  
  User.associate = (models)=>{
    User.hasMany(models.body,{
      as : 'Body',
      foreignKey : 'user_id',
      sourceKey : 'id',
      onDelete : 'CASCADE'
    });
  }

  User.beforeCreate((user,_)=>{
    user.password = passwordHash(user.password);
  })

  User.prototype.dateFormat = (date) =>{
    return moment(date).format('YYYY-MM-DD');
  }
  return User 
}