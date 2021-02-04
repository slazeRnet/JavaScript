//console.log(this); // {}

//console.log(global); // global {}

//console.log(globalThis); // global {} works on all eniorments 

//console.log(global === globalThis); // true

//#################### Ex. 1 function chaining #####################################

// function Food(name, quantity) {

//     this.name = name;

//     this.quantity = quantity;
// }

// function Peanuts(name, quantity) {

//     Food.call(this, name, quantity);

//     this.cals = 1000;
// }

// let peanuts = new  Peanuts('Nutella Peanuts', 100);

// console.log(peanuts.name, peanuts.quantity, peanuts.cals); //Nutella Peanuts 100 1000

//######################################################################################

//################### Ex 2 this in object ##############################################

this.globalProp = 'global prop text';

let obj = {
    prop: 'text',
}

let f = () => {
    return this;

    this.fText = 'prop text located in f'
}

function anotherFunc(){

    return f;

    this.anotherProp = 'Another text';
}

obj.anotherFunc = anotherFunc;

console.log(obj.anotherFunc()); // [function: f]
console.log(obj.anotherFunc()()); // { globalProp: 'global prop text' }
console.log(obj.anotherFunc()() === globalThis); // false
console.log(obj.anotherFunc()() === this); // true
console.log(globalThis.globalProp); // undefined
console.log(this === globalThis); //false


//######################################################################################


//######################################################################################
//const, let, and class declarations don’t create global object properties when used in global scope.

let a = 'text a';

this.b = 'text b';

var c = 'text c'; // c is not added to the global enviorment object record

console.log(this); //{ b: 'text b' }

console.log(globalThis.c); // undefined for NodeJS but is accessable when runed on Chrome
//######################## In Browser ############################################

// In Chrome

// globalThis === this // true

// var c = 'text c';

// console.log(globalThis.c);




