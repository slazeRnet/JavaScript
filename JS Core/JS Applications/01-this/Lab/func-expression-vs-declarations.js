// Example using a function expression
function createObject() {
    console.log('Inside `createObject`:', this.foo);
    return {
      foo: 42,
      bar: function() {
        console.log('Inside `bar`:', this.foo);
      },
    };
  }
  
  createObject.call({foo: 21}).bar(); // override `this` inside createObject

//   Inside `createObject`: 21
// Inside `bar`: 42

// Example using a arrow function
function createObject() {
    console.log('Inside `createObject`:', this.foo);
    return {
      foo: 42,
      bar: () => console.log('Inside `bar`:', this.foo),
    };
  }
  
  createObject.call({foo: 21}).bar(); // override `this` inside createObject

//   Inside `createObject`: 21
// Inside `bar`: 21