const express = require('express');

class App {
  constructor(){
    this.app = express();
  }
}

module.exports = new App().app;