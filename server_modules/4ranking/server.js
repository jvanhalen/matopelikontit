var express = require('express');
var Ranking = require('./ranking');

var app = express();

var rankingList = new Ranking();

process.env.APP_IP = process.env.APP_IP || "127.0.0.1";
process.env.APP_PORT = process.env.APP_PORT || "3000";

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get('/', function(req, res, next) {
  console.log("requested /");
  rankingList.get(function(rows){
    res.json({players: rows});
  });
});

console.log("listening", process.env.APP_IP + ":" + process.env.APP_PORT);

app.listen(process.env.APP_PORT, process.env.APP_IP);