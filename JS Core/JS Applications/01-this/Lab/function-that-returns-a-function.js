function foo(){

    let counter = 0;
    return  function bar(){

        counter++;
        return counter;
    }   
}

let caller = foo();

console.log(caller()); // 1
console.log(caller()); // 2
console.log(caller()); // 3
console.log(caller()); // 4
