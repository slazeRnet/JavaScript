function addAndSubtract() {
    function add(a, b){
        let result = a + b;
        return result;
    }
    
    function subtract(b, c) {
        let result = b - c;
        return result;
    }

let array = arguments;
let firstNumber = parseInt(array[0]);
let secoundNumber = parseInt(array[1]);
let thirdNumber = parseInt(array[2]);

let addResult = add(firstNumber, secoundNumber);
let total = subtract(addResult, thirdNumber);

console.log(total);

}

 addAndSubtract([23, 6, 10]);
