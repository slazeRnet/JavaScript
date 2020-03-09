// new Promise((resolve, reject) => {
//     console.log('Initial');

//     resolve();
// })
function sample(input){
    return input * 2;
    
}
sample(90)
.then(() => {
        
    console.log('Do this');
})
.catch(() => {
    console.error('Do that');
})
.then(() => {
    console.log('Do this, no matter what happened before');
});