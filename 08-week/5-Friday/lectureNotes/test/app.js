
const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(require('./routes/index'))

io.on('connection', (socket) => {

    console.log('a user connected');

    io.emit('chat message')
    // let intv = setInterval(()=>{

    // }, 1000)

    socket.on('chatMessage', function(data) {
        io.emit('updateMessages', data);
      });

    socket.on('disconnect', function(){
        console.log('user disconnected');
  });
  
})

http.listen(3000, () => {
  console.log("connected to port 3000")
})