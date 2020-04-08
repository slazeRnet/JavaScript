# JS Applications module course
# CONTENT:
## 1. [this](#1.this)
## 2. [Object Comparison](#2.Object-Comparison)
## 3. [Inheritance and Prototypes](#3.Inheritance-and-Prototypes)
## 4. [Restful services and AJAX](#4.Restful-services-and-AJAX)
## 5. [Assynchronous Programming](#5.Assynchronous-Programming)
## 6. [Remote Databases](#6.Remote-Databases)
## 7. [Templating](#7.Templating)
## 8. [Routing](#8.Routing)
## 9. [Workshop - Single Page App](#9.Workshop---Single-Page-App)
## 10. [Design Patterns](#10.Design-Patterns)
## 11. [Webpack](#11.Webpack)

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










