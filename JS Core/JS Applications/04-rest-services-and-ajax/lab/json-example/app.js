let fetch = require('node-fetch');
let jsonFile = require('./user.json')


fetch("./user.JSON")
.then(res => res.json())
.then(data => console.log(data))