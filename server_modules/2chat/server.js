var Chat = require('./chat');

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

process.env.APP_IP = process.env.APP_IP || "127.0.0.1";
process.env.APP_PORT = process.env.APP_PORT || "3004";

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
});

var chatserver = new Chat(io);

http.listen(process.env.APP_PORT, function(){
  console.log('listening on http://'+process.env.APP_IP+":"+process.env.APP_PORT);
});
