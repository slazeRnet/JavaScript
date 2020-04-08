# JS Applications module course
# CONTENT:
## 1. [this](#1this)
## 2. [Object Comparison](#2Object-Comparison)
## 3. [Inheritance and Prototypes](#3Inheritance-and-Prototypes)
## 4. [Restful services and AJAX](#4Restful-services-and-AJAX)
## 5. [Assynchronous Programming](#5Assynchronous-Programming)
## 6. [Remote Databases](#6Remote-Databases)
## 7. [Templating](#7Templating)
## 8. [Routing](#8Routing)
## 9. [Workshop - Single Page App](#9Workshop---Single-Page-App)
## 10. [Design Patterns](#10Design-Patterns)
## 11. [Webpack](#11Webpack)

---
# 1.this

## 1. Interpreter and Execution Context

- Interpreter reads and executes code line by line
- Execution Context 
- The scope in which the line is being executed
- The JavaScript runtime maintains a stack of these execution contexts 
- The execution context present at the top of this stack is currently being executed

## 2. this

- Special keyword in JavaScript
- Unlike C#, Java, PHP, etc. in JS this is not always an instance of the current object of some class
- Its value is based on the context
- There are differences in strict mode
- **The object that this refers to changes every time execution context is changed**

## 3. What is Function Context?

- **The function context is the object that owns the currently executed code**
- Function context === this object
- Depends on how the function is invoked
- Function invocation: func()
- Method invocation: object.function()
- Constructor invocation: new Array()
- Event handler: domElement.event()
- Indirect invocation: call() / apply() / bind()

## 4. "This" with Function invocation

+ This is the global object in a function invocation
```js
console.log(this === global); // false
function solve() {
  return this;
}
console.log(solve() === global) // true

```

## 5. Function invocation in Strict Mode 

+ Strict Mode
```js
function solve() {
  "use strict";
  console.log(this);
}
solve(); // undefined
```

+ No Strict Mode
```js
function solve() {
  console.log(this);
}solve(); 
// Object [global]

```

## 6. "This" Keyword in the Browser

```js
let b = "b";
console.log(this.b); //undefined

var a = "a";
console.log(this.a); //a

function foo() {
  console.log("Simple function call");
  console.log(this === window);  // true
}foo();
```

## 7. "This" in a Method invocation

+ This is the object that owns the method
```js
let person = {
  firstName: "Peter",
  lastName: "Ivanov",
  fullName: function(){
    return this.firstName + " " + this.lastName
  },
  whatIsThis: function(){ return this }
}console.log(person.fullName());  // Peter Ivanov
console.log(person.whatIsThis()); // person
```

## 8."This" Refers to the Parent Object
```js
function foo() {
  console.log(this === global);
}
let user = {
  count: 10,
  foo: foo,
  bar: function () { console.log(this === global); }
}
user.foo()  // false
let func = user.bar;
func() // true
user.bar()  // false
```

## 9. "This" with Inner Functions

+ this variable is accessible only by the function itself
```js
function outer() {
  console.log(this); // Object {name: "Peter"}
  function inner() {
    console.log(this); // global
  }
  inner();
}
const obj = { name: 'Peter', func: outer }
obj.func();
```

## 10. "This" with Arrow Functions
```js
+ this retains the value of the enclosing lexical context
function outer() {
  const inner = () => console.log(this);
  inner();
}
const obj = {
  name: 'Peter',
  func: outer
};
obj.func(); // Object {name: "Peter"}

```

## 11. "This" in Constructor invocation

+ The value of this refers to the newly created instance
```js
function Person(fn, ln) {
    this.first_name = fn;
    this.last_name = ln;
}
Person.prototype.displayName = function () {
      console.log(`Name: ${this.first_name} ${this.last_name}`);
};
let person = new Person("John", "Doe");
person.displayName();  // John Doe

```

**"This" in Constructor invocation :**
```js
class Person {
  constructor(fn, ln) {
    this.first_name = fn;
    this.last_name = ln;
    this.displayName = function () {
      console.log(`Name: ${this.first_name} ${this.last_name}`);
    } } };
let person = new Person("John", "Doe");
person.displayName();  // John Doe
```

## 12. In Events

- In event handlers, this is set to the element the event fired from
```js
element.addEventListener("click", function(e) {
  console.log(this === e.currentTarget); // Always true
});
```
## 13. "This" in Functions 

+ **Explicit Function Binding (*call, apply, bind*)**
    - Occurs when call(), apply(), or bind() are used on a function
    - Forces a function call to use a particular object for this binding
```js
function greet() {
    console.log(this.name);
}
let person = { name:'Alex' };
greet.call(person, arg1, arg2, arg3, ...); // Alex
```
+ **Changing the Context: Call()**
    - Calls a function with a given this value and arguments provided individually
```js
const sharePersonalInfo = function (...activities) {
  let info = `Hello, my name is ${this.name} and`+      	   + `I'm a ${this.profession}.\n`;
  info += activities.reduce((acc, curr) => {
      let el  = `--- ${curr}\n`;
      return acc + el;
  }, "My hobbies are:\n").trim();  return info;
}// Continues on the next slide…
const firstPerson = { name: "Peter", profession: "Fisherman" };
console.log(sharePersonalInfo.call(firstPerson, 'biking', 'swimming','football'));
// Hello, my name is Peter.
// I'm a Fisherman.
// My hobbies are:
// --- biking
// --- swimming
// --- football
```

+ **Changing the Context: Apply()**
    - Calls a function with a given this value, and arguments provided as an array
    - apply() accepts a single array of arguments, while call() accepts an argument list
    - If the first argument is undefined or null a similar outcome can be achieved using the array spread syntax

```js
const firstPerson = {
  name: "Peter", 
  prof: "Fisherman", 
  shareInfo: function () {
    console.log(`${this.name} works as a ${this.prof}`);
  }
};
const secondPerson = { name: "George", prof: "Manager" };
firstPerson.shareInfo.apply(secondPerson);
// George works as a Manager
```

+ **Changing the Context: Bind()**
    - The bind() method creates a new function 
    - Has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when  the new function is called
    - Calling the bound function generally results in the execution of its wrapped function
    - Bind makes a permanent context link and will always keep it
    - Bound function cannot change it’s linked context when using call or apply with a different context or even a rebound doesn’t have any effect
```js
const x = 42;
const getX = function () {
  return this.x;
}
const module = {x , getX };
const unboundGetX = module.getX;
console.log(unboundGetX()); // undefined
const boundGetX = unboundGetX.bind(module);
console.log(boundGetX()); // 42
```


---
# 2.Object Comparison
_Destructuring, Aggregation, Concatenation, Delegation_

## 1. What is Object Composition?

+ Combining simple objects or data types into more complex ones
```js
let name = "Sofia";
let population = 1325744;
let country = "Bulgaria";
let town = { name, population, country };
console.log(town);// Object {name: "Sofia", population: 1325744,country: "Bulgaria"}
town.location = { lat: 42.698, lng: 23.322 };
console.log(town); // Object {…, location: Object}

```

## 2. Printing Objects: ToString() Function
```js
let rect = {
  width: 10,
  height: 4,
  toString: function() { 
    return `rect[${this.width} x ${this.height}]`;
  }
};
console.log(rect); // Object {width: 10, height: 4}// This will invoke toString() to convert the object to Stringconsole.log('' + rect); // rect[12 x 7]
```

## 3. Destructuring

- *The ability to "dive into" an array or object and reference something inside of it more directly*
```js
const department = {
  name: "Engineering",
  data: {}
 }
 const { data } = department //now data references the data object directly
 const objectList = [ { key: 'value' }, { key: 'value' }, { key: 'value' } ]
 const [ obj, obj1, obj2 ] = objectList 
// now each object can be referenced directly

```
+ Nested Destructuring
    - *Destructuring can work beyond the top level*
```js
const department = {
  name: "Engineering",
  data: { 
    director: {
      name: 'John', 
      position: 'Engineering Director' 
    }, 
    employees: [],
    company: 'Quick Build' 
  }
}
const {data: {director}} = department 
// director is { name: 'John', position: 'Engineering Director'}
```
+ Destructuring Nested Arrays
    - You need to know the position of what you're looking for
    - Provide a reference variable (or comma placeholder) for each element up and until the one you're looking for 
```js
const departments = [['Engineering', ['secretary', 'director', 'worker']], ['Accounting', ['director', 'accountant']]];
const [[name, positions]] = departments
// name is 'Engineering'
// positions is [ 'secretary', 'director', 'worker' ]
```

+ Objects and Arrays Destructuring
```js
const employees = [{name: 'John', position: 'worker'}, {name: 'Jane', position: 'secretary'}]
const [{name}] = employees // name is 'John'

const company = { 
  employees: ['John', 'Jane', 'Sam', 'Suzanne'],
  name: 'Quick Build',
}
const {employees:[employee]} = company // employee is 'John'
```

## 4. Forms of Object Composition

+ **Aggregation**
    - Object is formed from an enumerable collection of subobjects
    - An aggregate is an object which contains other objects
    - When to use
    - Collections of objects which need to share common operations
    - When you want a single item to share the same interface as many items

*Aggregation Example*
```js
let dataArray = [ { id: "a", score: 1 }, { id: "b", score: 2 }, 
{ id: "c", score: 5 }, { id: "a", score: 3 }, { id: "c", score: 2 }, ];
let res1 = dataArray.reduce((acc, curr, index, array) => {
  let same = acc.find(e => e.id === curr.id);
  if (!same) {
    acc.push(curr);
  } else {
    same.score += curr.score;
  }
  return acc;
}, []);
console.log(res1);
//[ { id: 'a', score: 4 }, { id: 'b', score: 2 }, { id: 'c', score: 7 } ]
```

+ **Concatenation**
    - Concatenation is when an object is formed by adding new properties to an existing object
    - When to use
    - merging JSON objects
    - Creating updates to immutable state
    - Etc…
```js
const objs = [
	       {name: 'Peter',age:35 }, 
              { age: 22 },
              {name: "Steven"}, 
              {height:180}
];
const concatenate = (a, o) => ({...a, ...o});
const c = objs.reduce(concatenate, {});
console.log(c);// { name: 'Steven', age: 22, height: 180 }
```

+ **Delegation**
    - Delegation is commonly used to imitate class inheritance in JavaScript
    - Composes objects by linking together an object delegation chain 
    - An object forwards property lookups to another object
    - [].map() delegates to Array.prototype.map()














---
# 3.Inheritance and Prototypes
# 4.Restful services and AJAX
# 5.Assynchronous Programming
# 6.Remote Databases
# 7.Templating
# 8.Routing
# 9.Workshop - Single Page App
# 10.Design Patterns
# 11.Webpack










