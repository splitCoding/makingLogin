const express = require('express');
const nunjucks = require('nunjucks');

class App {
  constructor(){

    this.app = express();

    //라우팅
    this.setRouting();

    //nunjucks
    this.setNunjucks();

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
  
}

module.exports = new App().app;