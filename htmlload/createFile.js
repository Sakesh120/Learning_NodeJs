const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
const { error } = require("console");
const { buffer } = require("stream/consumers");

const arg = process.argv;
const port = arg[2];

const server = http.createServer((req, res) => {
  fs.readFile("html/form.html", "utf-8", (error, data) => {
    if (error) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.writable("internal server error");
      res.end();
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    if (req.url == "/") {
      res.write(data);
      res.end();
    } else if (req.url == "/submit") {
      let dataBody = [];
      req.on("data", (chunk) => {
        dataBody.push(chunk);
      });
      req.on("end", () => {
        const rawData = Buffer.concat(dataBody).toString();
        const readableData = queryString.parse(rawData);
        res.write("<h1>Form submitted successfully</h1>");
        let dataString =
          "My name " +
          readableData.fullname +
          " and  email id is " +
          readableData.email;
        console.log(dataString);
        // fs.writeFileSync("text/" + readableData.fullname + ".txt", dataString);  // By Syncronus way

        fs.writeFile(
          // Asynchronus Method
          "text/" + readableData.fullname + ".txt",
          dataString,
          "utf-8",
          (err) => {
            if (err) {
              res.end("internal server error");
              return false;
            } else {
              console.log("file Create");
            }
          }
        );

        res.end();
      });
      req.on("error", () => {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Request error");
      });
    } else {
      res.write("404 error");
      res.end();
    }
  });
});

server.listen(port);
