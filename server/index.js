var express = require('express');
var app = express();

//サーバーの立ち上げ
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3001;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/rtc.html');
});

//指定したポートにきたリクエストを受け取れるようにする
server.listen(port, function () {
  console.log('Server listening at port %d', port);
});