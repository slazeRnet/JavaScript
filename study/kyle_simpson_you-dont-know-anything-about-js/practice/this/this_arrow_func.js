// var this = this;
var foo = (() => this);
console.log(foo() === this); // true

// Call as a method of an object
var obj = {func: foo};
console.log(obj.func() === this); // true

// Attempt to set this using call
console.log(foo.call(obj) === this); // true

// Attempt to set this using bind
foo = foo.bind(obj);
console.log(foo() === this); // true