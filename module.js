// const fs = require("fs");
// const os = require("os");

// // fs.writeFileSync("dummy.txt", "trying new module working");
// // var info = fs.readFileSync("dummy.txt");

// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.cpus());

////////////////// Global Objects

const { log } = require("console"); /// forcefully  import object

// console.log("abs"); /// console is one of the global object  that do not need to import from anywhere

// console.log(process.cwd()); // give the path of this current opend file
// console.log(process.pid); // give process id

log("helo"); /// using forcefully import
