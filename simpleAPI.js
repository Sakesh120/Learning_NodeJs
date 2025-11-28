const http = require("http");

const userData = [
  {
    name: "sakesh",
    age: 20,
    email: "sac@op.com",
  },
  {
    name: "subham",
    age: 24,
    email: "skp@op.com",
  },
  {
    name: "Rohan",
    age: 21,
    email: "rcc@op.com",
  },
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(userData));
  res.end();
});
server.listen(3002);
