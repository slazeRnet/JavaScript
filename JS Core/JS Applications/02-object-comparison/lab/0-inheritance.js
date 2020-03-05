function doSomething(){}
doSomething.prototype.foo = "bar"; // add a property onto the prototype
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object
console.log( doSomeInstancing ); //doSomething { prop: 'some value' }


let sample = 'hello';
let result1 = sample.split('');
let index = result1.length - 4; // 1
result1.splice(4, 1);
let result2  = result1.join('') + '.'.repeat(3)
console.log(result2); // hell...
