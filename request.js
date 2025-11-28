const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req.headers);
  // console.log(req.url);
  // console.log(req.headers.host);
  // console.log(req.method);
  res.setHeader("Content-Type", "text/html");
  if (req.url == "/") {
    res.write("<h1>this is home page</h1>");
  } else if (req.url == "/about") {
    res.write("<h1>this is about page</h1>");
  } else if (req.url == "/contact") {
    res.write("<h1>this is contact page</h1>");
  } else {
    res.write("<h1>404 not found</h1>");
  }
  res.end();
});
server.listen(3004);
