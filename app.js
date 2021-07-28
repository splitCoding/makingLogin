const express = require('express');
const nunjucks = require('nunjucks');
const db = require('./models');

class App {
  constructor(){

    this.app = express();

    //라우팅
    this.setRouting();

    //nunjucks
    this.setNunjucks();

    //sequelize
    this.dbConnect();

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