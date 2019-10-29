function condense(input){
    let sum = 0;
    let array = input;
    let tempArray = [];
    while(array.length > 0){

        if(array.length != 1) {
        let sumThisIteration = 0;
        let currentNumber = array[0];
        array.splice(0, 1);
        sumThisIteration += currentNumber;
        if(array.length > 0){
            sumThisIteration += array[0];
        }
        tempArray.push(sumThisIteration);       
        }
        else{
            if(tempArray.length == 1 && array.length == 1 
                || array.length == 0) break;
               array = tempArray.slice();
               tempArray.splice(0, tempArray.length); 
        }
    }
    sum = tempArray.reduce((a, b) => a + b, 0);
    console.log(sum);
}

condense([2,10,3]);
