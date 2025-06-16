const path = require("path");
const saveData = require('./users/dataSaver');

const jsonPath = path.join(__dirname,"users","users.json");
saveData(jsonPath, "users", true);

