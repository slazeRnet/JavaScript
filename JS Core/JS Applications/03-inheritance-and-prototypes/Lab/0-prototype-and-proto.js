
function a() {};

class b {}; // JS TREATS FUNCTIONS AND CLASSES THE SAME. CLASSES ARE JUST SUGGAR SYNTAX

console.log(a.prototype); //a {}
console.log(a.__proto__); //[Function]
console.log('__________________________');

console.log(b.prototype); //a {}
console.log(b.__proto__); //[Function]
console.log(typeof(b)); //function
