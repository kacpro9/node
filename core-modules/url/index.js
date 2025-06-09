const url = require('url');

const urlToObj = url.parse('https://example.com/path?name=value#hash');
console.log(urlToObj);