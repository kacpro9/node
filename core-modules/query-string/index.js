const querystring = require("querystring");

const band = querystring.parse("name=The+Beatles&genre=Rock&year=1960");

console.log(band);

let user = {
    name: "John Doe",
    age: 30,
    city: "New York"
}

let stringFromObject = querystring.stringify(user);
console.log(stringFromObject); // Output: name=John+Doe&age=30&city=New+York