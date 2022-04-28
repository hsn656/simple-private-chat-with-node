var express = require("express");
// next session
var app = new express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const clients = {};

io.on("connect", function (client) {
  let onlineClients = Object.keys(clients)[0] ? Object.keys(clients) : [];
  client.emit("connected", onlineClients);
  client.on("join", function (name) {
    clients[name] = client;
  });

  client.on("message", function (data) {
    clients[data.to].emit("message", `${data.from}: ${data.msg}`);
    client.emit("message", `${data.from}: ${data.msg}`);
  });
});
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/chat.html");
});

http.listen(3000);
