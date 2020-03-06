//  obj.__proto__ points to the parent prototype
Object.prototype.printHello = function(){

    console.log('hello');
    
}

let simpleObj = {};

simpleObj.printHello(); // hello

