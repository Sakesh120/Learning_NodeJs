const http = require("http");
const fs = require("fs");

const arg = process.argv;
const port = arg[2];

const server = http.createServer((req, res) => {
  fs.readFile("html/web.html", "utf-8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("Internal Server Error");
    }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write(data);
    res.end();
  });
});

server.listen(port);
