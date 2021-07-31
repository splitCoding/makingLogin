module.exports = (io)=>{
  io.on('connection', (socket)=>{
    const session = socket.request.session.passport;
    const user = (typeof session !=='undefined')?(session.user) : "";
    console.log('hi');
    
    socket.on('user message', (data)=>{
      io.emit( 'server message', {message : data.message, username : user.username});
    })
  })
}
