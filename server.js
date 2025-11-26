const http = require("http");

// http.createServer().listen(5001);

// http
//   .createServer((req, resp) => {
//     resp.end("Hello");
//   })
//   .listen("5001");

// http
//   .createServer((req, res) => {
//     res.write("this the my new server");
//     res.end();
//   })
//   .listen(5001);

http
  .createServer((req, res) => {
    res.write("<h1>this the my new server</h1>");
    res.end();
  })
  .listen(5001);
