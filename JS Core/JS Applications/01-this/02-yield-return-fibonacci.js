

function getFibonator( ){

    return fibonacci();

    function* fibonacci(){
        let fi1 = 1;
    let fi2 = 1;

    while(true){
        let current = fi1;
         fi1 = fi2;
         fi2 = current + fi1;
        yield current;
    }
    }
    
}

let fib = getFibonator();

console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3


