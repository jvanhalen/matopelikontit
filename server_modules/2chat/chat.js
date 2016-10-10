"use strict";

var randomnames = ["matti", "teppo", "seppo"];

class Chat {
  constructor(io) {
    this.history = ["This is the initial chat log"];

    io.on('connection', function(socket){
      console.log("a new socket connected");

      socket.on('chatmessage', function(msg) {
        console.log("received message", msg);

        var message = { name: "CHAT_MESSAGE",
                    username: randomnames[Math.floor(Math.random()*randomnames.length)],  // message sender
                    text: msg       // message content
                  };
        io.emit('chatmessage', message);
      });
    });
  }

  getHistory(maxLines) {
    if(this.history.length > maxLines) {
      return this.history.slice(this.history.length - maxLines, this.history.length);
    } 
    else {
      return this.history;
    }
  }
}

module.exports = Chat;
