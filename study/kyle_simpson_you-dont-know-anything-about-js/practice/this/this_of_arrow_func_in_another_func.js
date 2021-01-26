// Create obj with a method bar that returns a function that
// returns its this. The returned function is created as
// an arrow function, so its this is permanently bound to the
// this of its enclosing function. The value of bar can be set
// in the call, which in turn sets the value of the
// returned function.
var obj = {
    bar: function() {
      var x = (() => this);
      return x;
    }
  };
  
  // Call bar as a method of obj, setting its this to obj
  // Assign a reference to the returned function to fn
  var fn = obj.bar();
  
  // Call fn without setting this, would normally default
  // to the global object or undefined in strict mode
  console.log(fn() === obj); // true
  
  // But caution if you reference the method of obj without calling it
  var fn2 = obj.bar;
  // Calling the arrow function's this from inside the bar method()
  // will now return window, because it follows the this from fn2.
  console.log(fn2()() === globalThis); // true
  console.log(fn2()()); // global {}