const http = require("http");
const fs = require("fs");

const arg = process.argv;
const port = arg[2];

const server = http.createServer((req, res) => {
  fs.readFile("html/form.html", "utf-8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.writable("intrnal server error");
      return res.end();
    } else if (req.url == "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    } else if (req.url == "/submit") {
      res.write("<h1> File Submitted</h1>");
      res.end();
    } else {
      res.write("404");
      res.end();
    }
  });
});

server.listen(port);
