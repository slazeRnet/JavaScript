function addOrSubtract(input){
    let array = input;
    let initialArraySum  = 0;
    let newArraySum = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            initialArraySum  += array[i];
            array[i] = array[i] + i;
            newArraySum  += array[i];
        }
        else{
            initialArraySum  += array[i];
            array[i] = array[i] - i;
            newArraySum  += array[i];
        }
    }

    console.log(array);
    console.log(initialArraySum);
    console.log(newArraySum);
    
}

addOrSubtract([5, 15, 23, 56, 35]);
