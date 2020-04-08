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





---
# 2.Object Comparison
# 3.Inheritance and Prototypes
# 4.Restful services and AJAX
# 5.Assynchronous Programming
# 6.Remote Databases
# 7.Templating
# 8.Routing
# 9.Workshop - Single Page App
# 10.Design Patterns
# 11.Webpack










