const http = require("http");
const userForm = require("./userForm");
const dataSubmit = require("./userDataSubmit");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (req.url == "/") {
      userForm(req, res);
    } else if ("/submit") {
      dataSubmit(req, res);
    } else {
      res.write("404 error");
    }
    res.end();
  })
  .listen(3100);
