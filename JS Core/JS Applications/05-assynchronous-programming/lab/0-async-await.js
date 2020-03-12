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
// async and await cannot have a catch() chained after it the way it is with promises.
// but it CAN HAVE the catch keyword : 
async function openChanel(){
try{

    const response = await makeRequest('Facebook');
    console.log(response);//Request send to Google
    const connectionResponse = await makeConnection(response);
    console.log(connectionResponse); // server : Request send to Google
    
} catch(err) {

    console.error(err);//We can't connect toFacebook
    
}
    
    
}

openChanel();