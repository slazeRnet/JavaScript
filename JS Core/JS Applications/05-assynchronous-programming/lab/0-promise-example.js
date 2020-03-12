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

