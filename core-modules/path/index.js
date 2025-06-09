const path = require("path");

const fileName = path.basename(__dirname + "/tmp/index.html");
const fileNameNoExt = path.basename(__dirname + "/tmp/index.html", ".html");

console.log("File Name:", fileName); // Output: index.html
console.log("File Name without Extension:", fileNameNoExt); // Output: index

const dirname = path.dirname(__dirname + "/tmp/index.html");
console.log("Directory Name:", dirname); // Output: /path/to/tmp

const ext = path.extname("/tmp/index.html");
console.log("File Extension:", ext); // Output: .html

const parseFile = path.parse(__dirname + "/tmp/index.html");
console.log("Parsed File:", parseFile);

const newPath = path.join(__dirname, "tmp");
console.log("Joined Path:", newPath); // Output: /path/to/tmp