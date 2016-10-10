"use strict";

class Database {
  constructor() {
    console.log("database class created");

    var mysql      = require('mysql');
    this.connection = mysql.createConnection({
      host     : process.env.MYSQL_ADDRESS,
      user     : 'root',
      password : process.env.MYSQL_ROOT_PASSWORD,
      database : 'alphaworm'
    });

    if(process.env.MYSQL_ADDRESS) {
      this.connection.connect();
    }
  }
}

class Ranking extends Database {
  get(callback) {
    this.connection.query('SELECT ??, ?? FROM userdata ORDER BY highscore DESC', ["username", "highscore"],
    function(err, rows, fields) {
      if(err) {
        console.log("error occurred in ranking.get():", err);
        callback("error");
      }
      else {
        console.log("rows:", rows);
        callback(rows);
      }
    });
  }
}

module.exports = Ranking;