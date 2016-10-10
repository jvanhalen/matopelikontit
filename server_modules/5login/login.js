"use strict";

class Database {
  constructor() {
    console.log("database class created");

    var mysql      = require('mysql');
    this.connection = mysql.createConnection({
      host     : '172.16.0.1',
      user     : 'root',
      password : 'testitesti',
      database : 'alphaworm'
    });

    this.connection.connect();
  }
}

class Login extends Database {
  authorise(callback, username, password) {
    this.connection.query('SELECT password FROM userdata WHERE username=??', [username],
    function(err, rows, fields) {
      if(err) {
        console.log("error occurred in ranking.get():", err);
      }
      else {
        console.log("rows:", rows);
        callback(rows);
      }
    });
  }
}

module.exports = Login;