let fetch = require('node-fetch');
let jsonData = require('./user.json')

console.log(jsonData);

fetch(jsonData).then(function (response) {

    console.log(response.json());
    
    response.json().then(function (data) {
        console.log(data); // logs 10 objects of users on the console

    });
});