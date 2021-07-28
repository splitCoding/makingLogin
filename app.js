const express = require('express');

class App {
  constructor(){

    this.app = express();
    
    //라우팅
    this.setRouting();

  }

  setRouting(){
    
    this.app.use(require('./controllers'));
  
  }
}

module.exports = new App().app;