const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  ////////////////
  let collectHeaderData = fs.readFileSync("web/header.html", "utf-8");
  let collectFooterData = fs.readFileSync("web/footer.html", "utf-8");
  /////////////////////
  let file = "/index";
  if (req.url != "/") {
    file = req.url;
  }
  /////

  if (req.url != "/style.css") {
    fs.readFile("web" + file + ".html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });

        return res.end();
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(collectHeaderData + "" + data + "" + collectFooterData);
      res.end();
    });
  } else if (req.url == "/style.css") {
    fs.readFile("web/style.css", "utf-8", (err, data) => {
      if (err) {
        res.writable(500, { "Content-Type": "text/plain" });
        res.writable("css not found");
        return res.end();
      }
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    });
  }
});
server.listen(3210);
