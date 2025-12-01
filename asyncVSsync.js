// console.log("ASUS 1");
// console.log("ASUS 2");
// setTimeout(() => {
//   console.log("ASUS 3");
// }, 2000);
// console.log("ASUS 4");

// let a = 20;
// let b = 0;
// setTimeout(() => {
//   b = 150;
// });
// console.log(a + b);

// const { error } = require("console");
const fs = require("fs");

// fs.readFile("dummy.txt", "utf-8", (error, data) => {
//   if (error) {
//     return false;
//   } else {
//     console.log(data);
//   }
// });
// console.log("end script");

const data = fs.readFileSync("dummy.txt", "utf-8");
console.log(data);
console.log("end script");
