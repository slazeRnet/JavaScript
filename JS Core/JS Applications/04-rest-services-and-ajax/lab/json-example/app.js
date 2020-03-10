let fetch = require('node-fetch');
let jsonFile = require('./user.json');

console.log(typeof(jsonFile));
//let obj = JSON.parse(jsonFile);
console.log(jsonFile[0].username);
