console.log(this); // {}
console.log(globalThis); //globalThis Object

'use strict'

console.log(this); // {}
console.log(globalThis); //globalThis Object

function f1(){
    'use strict'
    return this; //undefined
}

function f1(){
    return this; //globalThis Object
}
console.log(f1());