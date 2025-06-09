const fs = require("fs");
const path = require("path");

function sleeps(ms) {
    let now = Date.now();
    while (Date.now() - now < ms) {

    }
}

console.log("Starting event loop example...");

console.time("File read time");

fs.readFile(path.join(__dirname, "data", "lorem.txt"), function () {
  console.log("File read completed.");

  console.timeEnd("File read time");
});

sleeps(6000);

console.log("Log after readFile call.");
