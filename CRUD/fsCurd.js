const { log } = require("console");
const fs = require("fs");

////creating the file
// fs.writeFileSync("files/ideate.txt", "This is a ideate boy");

//// deleting the file
// fs.unlinkSync("files/smart.txt");

//// read the file
const para = fs.readFileSync("files/ideate.txt", "utf-8");
console.log(para);

//// append in file
// fs.appendFileSync("files/ideate.txt", " this is false statement");
