const fs = require("fs");

let readStream = fs.createReadStream("./stream/data/text.txt", {
  hifhWaterMark: 32 * 1024, // 32KB
});

readStream.on("data", function (chunk) {
  console.log(chunk);
});
