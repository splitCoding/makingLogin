const removeByValue = require('./removeByValue')();

module.exports = (io)=>{
  let userList = [];

  io.on('connection', (socket)=>{
    const session = socket.request.session.passport;
    const user = (typeof session !=='undefined')?(session.user) : "";

    if(!userList.includes(user.username)){
      userList.push(user.username);
    }
    io.emit('join', userList);

    socket.on('user message', (data)=>{
      io.emit( 'server message', {message : data.message, username : user.username});
    })

    socket.on('disconnect',()=>{
      userList.removeByValue(user.username);
      io.emit('leave',userList);
    })
  })
}
