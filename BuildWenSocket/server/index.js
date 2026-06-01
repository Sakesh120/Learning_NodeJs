const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");
const { Socket } = require("dgram");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

/// Socket.io    //// socket --> client
io.on("connection", (socket) => {
  socket.on("user_message", (message) => {
    //////// get message from frontend
    io.emit("message", message); /// message give to all
  });
});

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");
});
server.listen(9000, () => {
  console.log("server staterd at port 9000");
});
