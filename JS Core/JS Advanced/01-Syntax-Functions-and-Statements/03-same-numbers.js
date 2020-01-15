function numbersAreEqual(numbers){
    let number;
    let total = 0;
    let result = true;

    let arr = `${numbers}`.split('');
    number = arr[0];
    for (let index = 0; index < arr.length; index++) {
        if(result == true && arr[index] != number){
            result = false;
        }
        total += parseInt(arr[index]);
    }
    console.log(result);
    console.log(total);
    
}

numbersAreEqual(2222222); // true 14
numbersAreEqual(1234); //false 10
