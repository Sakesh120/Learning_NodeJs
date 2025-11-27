const http = require("http");
const count = 10;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(
    `
    <html>
    <head><title>New Page</title></head>
    <body>
    <h1>hello</h1>
    <h2>` +
      count +
      `</h2>
    <h2>` +
      new Date() +
      `</h2>
    </body>
    </html>
    `
  );
  res.end();
});

server.listen(3001);
