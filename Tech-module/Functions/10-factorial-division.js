//6: 1*2*3*4*5*6 == 720
function factorialDivision(number1, number2){
    var currentFactorialCounter = number1;
    let factorial1 = number1;
    let factorial2 = number2;
    let calgulateFactorial = function(number){
        if(number <= 0){
           return 1;
        }
        let result = number * calgulateFactorial(number - 1);
        return result;
    }
    
    factorial1 = calgulateFactorial(number1);
    factorial2 = calgulateFactorial(number2);

    let result = factorial1 / factorial2;
    console.log(result.toFixed(2));
    
}

factorialDivision(5, 2); // 60.00
factorialDivision(6, 2); //360.00
