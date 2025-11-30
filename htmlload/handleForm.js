const http = require("http");
const fs = require("fs");
const queryString = require("querystring");

const arg = process.argv;
const port = arg[2];

const server = http.createServer((req, res) => {
  fs.readFile("html/form.html", "utf-8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.write("Internal Server Error");
      return res.end();
    }

    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    }

    if (req.url === "/submit" && req.method === "POST") {
      let dataBody = [];
      req.on("data", (chunk) => {
        dataBody.push(chunk);
      });

      req.on("end", () => {
        const rawData = Buffer.concat(dataBody).toString();
        const readableData = queryString.parse(rawData);
        console.log(readableData);

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<h1>Form submitted successfully</h1>");
        res.write(`
          <h2>The Data Submitted is:</h2>
          <p>Fullname: ${readableData.fullname || ""}</p>
          <p>Date Of Birth: ${readableData.dob || ""}</p>
          <p>Phone No.: ${readableData.phone || ""}</p>
          <p>Email Address: ${readableData.email || ""}</p>
          <p>Gender: ${readableData.gender || ""}</p>
          <p>Address: ${readableData.address || ""}</p>
        `);
        res.end();
      });

      // handle error / large body if needed
      req.on("error", () => {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Request error");
      });

      return;
    }

    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 — Page not found</h1>");
    res.end();
  });
});

server.listen(port);
