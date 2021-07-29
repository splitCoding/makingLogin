const express = require('express');
const nunjucks = require('nunjucks');
const db = require('./models');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');

class App {
  constructor(){

    this.app = express();

    //미들웨어
    this.setMiddleware();

    //라우팅
    this.setRouting();

    //nunjucks
    this.setNunjucks();

    //세션
    this.setSession();

    //sequelize
    this.dbConnect();

  }
  
  setMiddleware(){
    this.app.use(logger('dev'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

  }
  
  setRouting(){
    
    this.app.use(require('./controllers'));
  
  }

  setNunjucks(){
    nunjucks.configure('template', {
      autoescape: true,
      express: this.app
    });
  }

  setSession(){
    this.app.use(session({
      secret : 'makinglogin', //암호화에 쓰일 문구
      resave : false, // 세션 항상 저장할지 여부
      saveUninitialized : true, //세션을 초기화하지 않고 저장할지 여부
      cookie : {
        maxAge : 2000 * 60 * 60 //지속시간
      }
    }));
  }
  
  dbConnect(){
    db.sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
      // return db.sequelize.sync({force : true});
    })
    .then(() => {
      console.log('DB Sync complete.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  }
}

module.exports = new App().app;