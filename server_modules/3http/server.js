var express = require('express');
var app = express();

app.use(express.static('html'));

process.env.APP_IP = process.env.APP_IP || "127.0.0.1";
process.env.APP_PORT = process.env.APP_PORT || "3000";

console.log("listening", process.env.APP_IP + ":" + process.env.APP_PORT);
app.listen(process.env.APP_PORT);