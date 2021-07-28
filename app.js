const express = require('express');
const nunjucks = require('nunjucks');
const db = require('./models');
const bodyParser = require('body-parser');

class App {
  constructor(){

    this.app = express();

    //미들웨어
    this.setMiddleware();
    //라우팅
    this.setRouting();

    //nunjucks
    this.setNunjucks();

    //sequelize
    this.dbConnect();

  }
  
  setMiddleware(){

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

  dbConnect(){
    db.sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
      return db.sequelize.sync({force : false});
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