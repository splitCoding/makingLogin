module.exports = (sequelize, DataTypes) => {
  const body = sequelize.define('body',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    weight : {type : DataTypes.INTEGER},
    height : {type : DataTypes.INTEGER},
    bmi : {type : DataTypes.FLOAT},
    // userid : {type : DataTypes.STRING}
  },{
    tableName : 'body'
  })
  // body.associate = (models)=>{
  //   body.belongsTo(models.User)
  // };
  return body;
}