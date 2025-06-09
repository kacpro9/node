const fs = require("fs");
const path = require("path");

fs.readdir(path.join(__dirname, "data"), function (err, files) {
  if (err) {
    console.log(err);
  } else {
    console.log(files);

    fs.mkdir(path.join(__dirname, "average"), function (err) {
      if (err) {
        if (err.code === "EEXIST") {
          console.log("Directory already exists");
          return;
        }
        console.log(err);
      } else {
        console.log("Directory created successfully");
      }
    });

    files.forEach(function (file, index) {
      fs.readFile(
        path.join(__dirname, "data", file),
        "utf-8",
        function (err, data) {
          let sum = 0;
          let count = 0;

          if (err) {
            console.log(err);
          } else {
            console.log(JSON.parse(data));

            let studentsData = JSON.parse(data);

            for (let studentData of studentsData) {
              sum += studentData.mark;
              count++;
            }
          }

          fs.writeFile(
            path.join(
              __dirname,
              "average",
              "result-year- " + (index + 1) + ".txt"
            ),
            (sum / count).toString(),
            function (err) {
              if (err) {
                console.log(err);
              } else {
                console.log("File written successfully");
              }
            }
          );
        }
      );
    });
  }
});
