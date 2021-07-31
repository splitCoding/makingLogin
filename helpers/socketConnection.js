module.exports = (io)=>{
  io.on('connection', (socket)=>{
    console.log('hi');
    socket.on('user message', (data)=>{
      io.emit( 'server message', data.message);
    })
  })
}