var express = require('express');
var app = express();
var path = require('path');

var login = require("./login");

app.post('/', function(req, res) {
  if(req.params.username) {
    console.log("requesting login for", req.params.username);
    login.check(req, res);
  }
});

app.listen(8081);