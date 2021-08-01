const Sequelize = require('sequelize');
const dotenv = require('dotenv'); //env에 작성해놓은 환경변수 사용하기 위함
dotenv.config(); //env에 작성해놓은 환경변수 사용하기 위함
const path = require('path');
const fs = require('fs');

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  timezone : "+09:00", //한국시간으로 설정
  operatorsAliases: Sequelize.Op,

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

let db = [];

fs.readdirSync(__dirname)
  .filter((file)=>{
    return file.indexOf('.js') && file !== 'index.js'
  })
  .forEach((file)=>{
    let model = require(path.join(__dirname,file))(
      sequelize, Sequelize.DataTypes)
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName =>{
  if("associate" in db[modelName]){
    db[modelName].associate(db);
  }
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;