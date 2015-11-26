//サーバーの立ち上げ
var port = process.env.PORT || 3002;
var io = require('socket.io').listen(port);

io.sockets.on('connection', function(socket) {
  console.log("connection");
  socket.on('message', function(message) {
    socket.broadcast.emit('message', message);
  });
 
  socket.on('disconnect', function() {
    socket.broadcast.emit('user disconnected');
  });
});