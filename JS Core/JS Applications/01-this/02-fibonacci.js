function getFibonator( ){

    function fib(num){

        if(num <= 1){
            return 1;
        }

        return fib(num - 2) + fib(num - 1);
    }

    let counter = 0;
    return function inner(){

        counter++;

        return fib(counter);
    }

    
}

let fib = getFibonator();

console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
