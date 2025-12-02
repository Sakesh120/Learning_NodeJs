// const queryString = require("querystring");

function dataSubmit(req, res) {
  //   let dataBody = [];
  //   req.on("data", (chunk) => {
  //     dataBody.push(chunk);
  //   });

  //   req.on("end", () => {
  //     const rawData = Buffer.concat(dataBody).toString();
  //     const readableData = queryString.parse(rawData);
  //     console.log("parsed form data:", readableData);
  res.write("<h1>Form submitted successfully</h1>");
  //   });
}

module.exports = dataSubmit;
