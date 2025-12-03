const fs = require("fs");

const operation = process.argv[2];
const fName = process.argv[3];
const content = process.argv[4];

if (operation == "write") {
  ///nodemon curdByterminal.js write terminal.txt "this is created using terminal"
  fs.writeFileSync(`files/${fName}`, `${content}`);
} else if (operation == "read") {
  /// nodemon curdByterminal.js read  terminal.txt
  const kuchTo = fs.readFileSync(`files/${fName}`, "utf-8");
  console.log(kuchTo);
} else if (operation == "append") {
  ///nodemon curdByterminal.js append terminal.txt "and now i append"
  fs.appendFileSync(`files/${fName}`, `${content}`);
} else if (operation == "delete") {
  fs.unlinkSync(`files/${fName}`);
} else {
  console.log("Enter correct operation name or file name");
}
