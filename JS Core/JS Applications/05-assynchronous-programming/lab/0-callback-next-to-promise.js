let userLeft = false;
let userUnsubscribed = true;

//this code could be much readeble if it was implemented with promise
function isUserInterested(callback, errorCallback){

    if(userLeft){
        errorCallback({
            user: 'Some user',
            message: 'user left the video'
        });
    }
    else if(userUnsubscribed){
        errorCallback({
            user: 'Some user',
            message: 'user unsubscribed from the chanel'
        });
    }
    else{
        callback({
            message : 'evrything is going well'
        });
    }
}

isUserInterested((message) => {
    console.log(message.message);
    
}, (errMessage) => {
console.error(errMessage.message);
});
    