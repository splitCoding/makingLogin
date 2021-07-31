const removeByValue = require('./removeByValue')();

module.exports = (io)=>{
  let userList = [];

  io.on('connection', (socket)=>{
    const session = socket.request.session.passport;
    const user = (typeof session !=='undefined')?(session.user) : "";

    if(!userList.includes(`${user.userid} (${user.username})`)){
      userList.push(`${user.userid} (${user.username})`);
    }
    io.emit('join', userList);

    socket.on('user message', (data)=>{
      io.emit( 'server message', {message : data.message, userid : user.userid, username : user.username});
    })

    socket.on('disconnect',()=>{
      userList.removeByValue(`${user.userid} (${user.username})`);
      io.emit('leave',userList);
    })
  })
}
