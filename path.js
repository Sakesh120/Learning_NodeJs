const path = require("path");
const file = "txtfiles/demopath.txt";

// console.log(path.extname(file));           /// .txt
// console.log(path.dirname(file));           /// txtfiles

// console.log(path.basename(file));          /// demopath.txt

// console.log(path.resolve("txtfiles", "demopath.txt"));     /// C:\Users\ASUS\OneDrive\Desktop\Backend\Learning_NodeJs\txtfiles\demopath.txt

// console.log(path.parse(file));
/// o/p
/// {
///  root: '',
///  dir: 'txtfiles',
///   base: 'demopath.txt',
///  ext: '.txt',
///  name: 'demopath'
/// }

// console.log(path.isAbsolute(file));  /// false /// it is relative

// console.log(__dirname);  /// C:\Users\ASUS\OneDrive\Desktop\Backend\Learning_NodeJs

console.log(__filename); /// C:\Users\ASUS\OneDrive\Desktop\Backend\Learning_NodeJs\path.js
