const app = require('./app');
const port = 3000;

const server = app.listen(port,()=>{
  console.log('Express listening to port'+port);
})

const listen = require('socket.io');
const io = listen(server); ///socket.io/socket.io.js에 정적파일을 만들어줌
require('./helpers/socketConnection')(io);
