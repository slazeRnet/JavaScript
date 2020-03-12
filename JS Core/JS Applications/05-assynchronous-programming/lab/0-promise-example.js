let p = new Promise((resolve, reject) => {
    let calculation = 1 + 1;

    if(calculation === 2){
        resolve('Success'); // the resolution of this promise is Success
    } else {
        reject('Failed'); 
    }
})

p.then((message) => { 
    console.log(`the resolution of this promise is ` + message);
});

// PROMISE EXAMPLE WITH CHAINED THEN

function makeRequest(location){
return new Promise((resolve, reject) => {
    if(location === 'Google'){
        resolve('Request send to ' + location);
    } else {
        reject('We can\'t connect to' + location);
    }
})
}

function makeConnection(response){
    return new Promise((resolve, reject) => {
        resolve('server : ' + response);
    })
}

makeRequest('Google')
.then( response => {

    console.log('Request completed.'); //Request completed.
    console.log(response); //Request send to Google
    return makeConnection(response);

}).then(serverAnswear => {

    console.log(serverAnswear);//server : Connectiog you to Google

}).catch(err => {

    console.log(err);
    
})
