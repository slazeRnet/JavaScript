let fetch = require('node-fetch');

fetch('http://swapi.co/api/people/4/').then( function(response){

    response.json().then( (data) => console.log(JSON.stringify(data.name))) //"Darth Vader"
    .catch( (error) => {
        console.log(error);
    });
    
})