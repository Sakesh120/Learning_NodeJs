const http = require("http");

const arg = process.argv; // read  CMD  input          // write in cmd ( nodemon command-line-input.js 4500) // 4500 or any port no.
console.log(arg[2]);
const port = arg[2];
http
  .createServer((req, res) => {
    res.write("hello world");
    res.end();
  })
  .listen(port); // dynamic port is created
