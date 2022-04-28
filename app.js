var express = require('express')
// next session
var app = new express()

var http = require('http').createServer(app)
var io = require('socket.io')(http)


// connect
io.on('connect', function(client){
  // console.log(client)
  // console.log('socket opened')
//   // smiple logic
  // client.emit('connected')
  //
  //

  // client.on('join', function(name){
  //   // added property name
	// 	client.nickname = name;
  //   console.log(client.nickname)
	// })

// //
  client.on('message', function(data){
  //   console.log('data', data)
// // //     // console.log(client)
// // // //     //
   // client.emit('msg', 'Push notification') //sent to connected client-
// // //     //
    // client.broadcast.emit('messages', data) //--> all clients except connected client
// // //     //
    // io.sockets.emit('all', data) //for all
    io.emit('all', data) //for all
// // //     //
// // //     //
// // //     // // simple logic
//     // var nickname = client.nickname ;
//     // client.emit('msg', nickname + ': ' + data)
// // // //
  })
})
// //
app.get('/', function(req, res){
  res.sendFile(__dirname+'/chat.html')
})




http.listen(3000)

//https://socket.io/get-started/chat
