const fetch = require("node-fetch");

fetch('https://jsonplaceholder.typicode.com/users').then( function(response){

    if(response.status !== 200){
        throw new Error('error occured');
    }

   response.json().then( function(data){
    console.log(data); // logs 10 objects of users on the console

});

});