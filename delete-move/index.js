const fs = require("fs");
const path = require("path");

// function createDirectory(path) {
//   fs.mkdir(path, function (err) {
//     if (err) {
//       if (err.code === "EEXIST") {
//         console.log("Directory already exists");
//         return;
//       }
//       console.log(err);
//     } else {
//       console.log("Directory created successfully");
//     }
//   });
// }

// createDirectory(path.join(__dirname, "data-temp"));

// fs.readdir(path.join(__dirname, "data"), function (err, files) {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   files.forEach(function (file) {
//     fs.renameSync(
//       path.join(__dirname, "data", file),
//       path.join(__dirname, "data-temp", "temp-" + file),
//       function (err) {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log("Directory renamed successfully");
//         }
//       }
//     );
//   });

//   fs.rmdir(path.join(__dirname, "data"), function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Directory deleted successfully");
//     }
//   });
// });

fs.rm(path.join(__dirname, "log.txt"), function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("File deleted successfully");
  }
});
