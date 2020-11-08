### CONTENT
### [1. Overview](#1-overview-1)

### [3. Data Types](#3-data-types-1)
### [4. Statements](#4-statements-1)
### [5. Expressions & Operations](#5-expressions-operations-1)
### :capital_abcd: [10. Definitions](#capital_abcd-10-definitions-1)
### :x: [11. Errors](#x-11-errors-1)

___
# 1. Overview
- stable API - API stability refers to some level of guarantee from a project that its API will only change in defined ways in the future, or will not change at all.

---

---
# 3. Data Types & Values
## 3.1. Standart Build in Objects
### 3.1.1. Value Properties
#### 3.1.1.1. Infinity
#### 3.1.1.2. NaN
#### 3.1.1.3. undefined
#### 3.1.1.4. globalThis
- manually referencing the global variable with a
window reference is something some developers prefer to avoid,
especially if your code needs to run in multiple JS environments
(not just browsers, but server-side node.js, for instance), where the
global variable may not always be called window.

NodeJS global scope:
> this

ES6 global scope:
> window
### 3.1.2. Lack of Identification (null)
- The value null is written with a literal: null. null is not an identifier for a property of the global object, like undefined can be. Instead, null expresses a lack of identification, indicating that a variable points to no object. In APIs, null is often retrieved in a place where an object can be expected but no object is relevant. 
<details>
    <summary>Code Example</summary>
    <code>
  // foo does not exist. It is not defined and has never been initialized:
        <br>
foo; //ReferenceError: foo is not defined
  </code>
    <br>
 <code>
// foo is known to exist now but it has no type or value:
     <br>
var foo = null; 
foo; //null
    </code>
</details>

<details>
    <summary>Comparison Operator Code Example</summary>
 <code>
typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null == null         // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true
  </code>
</details>

---
## 3.2. Function properties
<details>
    <summary>All Function Properties</summary>  
- eval()
- uneval() 
- isFinite()
- isNaN()
- parseFloat()
- parseInt()
- encodeURI()
- encodeURIComponent()
- decodeURI()
- decodeURIComponent()
- Deprecated
    - escape()
    - unescape()
 </details>
 
---
## 3.3. Fundamental objects
#### 3.3.1. Object
- [MDN Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.
<details>
    <summary>:information_source: Description </summary>
    Description
Nearly all objects in JavaScript are instances of Object; a typical object inherits properties (including methods) from Object.prototype, although these properties may be shadowed (a.k.a. overridden). However, an Object may be deliberately created for which this is not true (e.g. by Object.create(null)), or it may be altered so that this is no longer true (e.g. with Object.setPrototypeOf).

Changes to the Object prototype object are seen by all objects through prototype chaining, unless the properties and methods subject to those changes are overridden further along the prototype chain. This provides a very powerful although potentially dangerous mechanism to override or extend object behavior.

The Object constructor creates an object wrapper for the given value.

- If the value is null or undefined, it will create and return an empty object.
- Otherwise, it will return an object of a Type that corresponds to the given value.
- If the value is an object already, it will return the value.
- When called in a non-constructor context, Object behaves identically to new Object().

</details>

#### 3.3.1.1. Self reference in object literals/ initialisers
- [Stackoverflow](https://stackoverflow.com/questions/4616202/self-references-in-object-literals-initializers)
- The only way to do this is with getter:
```js
var foo = {
  a: 5,
  b: 6,
  get c() {
    return this.a + this.b;
  }
}

console.log(foo.c) // 11
```
---
## 3.4. Error objects

---
## 3.5. Numbers and dates

### 3.5.1. Number
Number is a primitive wrapper object used to represent and manipulate numbers like 37 or -9.25.
The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.

The JavaScript Number type is a double-precision 64-bit binary format IEEE 754 value, like double in Java or C#. This means it can represent fractional values, but there are some limits to what it can store. A Number only keeps about 17 decimal places of precision; arithmetic is subject to rounding. The largest value a Number can hold is about 1.8×10308. Numbers beyond that are replaced with the special Number constant Infinity.

A number literal like 37 in JavaScript code is a floating-point value, not an integer. There is no separate integer type in common everyday use. (JavaScript now has a BigInt type, but it was not designed to replace Number for everyday uses. 37 is still a Number, not a BigInt.)

Number may also be expressed in literal forms like 0b101, 0o13, 0x0A. Learn more on numeric lexical grammar here.

#### 3.5.1.1. Number Description
When used as a function, Number(value) converts a string or other value to the Number type. If the value can't be converted, it returns NaN.

You don’t have to use a variable with the value in it to access these
methods; you can access these methods directly on number literals.
But you have to be careful with the . operator. Since . is a valid
numeric character, it will first be interpreted as part of the number
literal, if possible, instead of being interpreted as a property accessor:

```js
// invalid syntax:
42.toFixed( 3 ); // SyntaxError
// these are all valid:
(42).toFixed( 3 ); // "42.000"
0.42.toFixed( 3 ); // "0.420"
42..toFixed( 3 ); // "42.000"
```
:information_source: This is also technically valid (notice the space):
```js
42 .toFixed(3); // "42.000"
```

- Literal syntax
123    // one-hundred twenty-three
123.0  // same
123 === 123.0  // true

- Function syntax
Number('123')  // returns the number 123
Number('123') === 123  // true

Number("unicorn")  // NaN
Number(undefined)  // NaN

### 3.5.2. BigInt
### 3.5.3. Math
### 3.5.4. Date

---
## 3.6. Text processing

---
## 3.7. Indexed collections
- Reversing a string (incidentally, a common
JavaScript interview trivia question!). arrays have a reverse()
in-place mutator method, but strings do not:
```js
text.reverse; // undefined
arr.reverse(); // ["!","o","O","f"]
arr; // ["!","o","O","f"]
```



#### 3.7.1. Int8Array
#### 3.7.2. Array
#### 3.7.3. Uint8Array
#### 3.7.4. Uint8ClampedArray
#### 3.7.5. Int16Array
#### 3.7.6. Uint16Array
#### 3.7.7. Int32Array
#### 3.7.8. Uint32Array
#### 3.7.9. Float32Array
#### 3.7.10. Float64Array
#### 3.7.11. BigInt64Array
#### 3.7.12. BigUint64Array
---

## 3.8. Keyed collections

## 3.9. Structured data

## 3.10. Control abstraction objects

## 3.11. Reflection

## 3.12. Internationalization

## 3.13. WebAssembly

## 3.14. Other
### 3.14.1.  Statements and Declarations
<details>
    - <summary> :information_source: Difference between var and let in JavaScript </summary>

Last Updated: 07-08-2019
var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped.
It can be said that a variable declared with var is defined throughout the program as compared to let.
An example will clarify the difference even better
Example of var:

Input:
    <code>
console.log(x);
var x=5;
console.log(x);
    </code>
    <br>
Output:
<code>
undefined
5
 </code>
 <br>
Example of let:
 <br>

Input:
<code>
console.log(x);
let x=5;
console.log(x);
    </code>
    <br>
   
Output:
 <code>
Error
    </code>
</details>

### 3.14.2. arguments

___

# 4. Statements

___

# 5. Expressions & Operations

<details>
<summary> :page_with_curl: CONTENT </summary>
<strong>5.1 Primary expressions</strong>
    <br>
- this
     <br>
- function
     <br>
- class
     <br>
- function*
     <br>
- yield
     <br>
- yield*
     <br>
- async function
     <br>
- await
     <br>
- []
     <br>
- {}
     <br>
- /ab+c/i
     <br>
- ( )
     <br>
- null  
     <br>
<strong>5.2. Left-hand-side expressions</strong>
     <br>
- Property accessors
     <br>
- new
     <br>
- new.target
     <br>
- super
     <br>
- ...obj
     <br>
<strong>5.3. Increment & decrement</strong>
     <br>
- A++
     <br>
- A--
     <br>
- ++A
     <br>
- --A
     <br>
<strong>5.4. Unary operators</strong>
     <br>
- delete
     <br>
- void
     <br>
- typeof
     <br>
- +
     <br>
- -
     <br>
- ~
     <br>
- !
     <br>
</details>

___

# :capital_abcd: 10. Definitions

### 10.1. Callbacks [:link: MORE INFO](http://callbackhell.com/)
Callbacks are just the name of a convention for using JavaScript functions. There isn't a special thing called a 'callback' in the JavaScript language, it's just a convention. Instead of immediately returning some result like most functions, functions that use callbacks take some time to produce a result. The word 'asynchronous', aka 'async' just means 'takes some time' or 'happens in the future, not right now'. Usually callbacks are only used when doing I/O, e.g. downloading things, reading files, talking to databases, etc.

#### 10.1.1. :question: How do I fix callback hell?
- Callback hell is caused by poor coding practices. Luckily writing better code isn't that hard!

- :information_source: You only need to follow three rules:
##### :one: Keep your code shallow
:spaghetti: Here is some messy browser JavaScript that uses browser-request to make an AJAX request to a server:
```js
var form = document.querySelector('form')
form.onsubmit = function (submitEvent) {
  var name = document.querySelector('input').value
  request({
    uri: "http://example.com/upload",
    body: name,
    method: "POST"
  }, function (err, response, body) {
    var statusMessage = document.querySelector('.status')
    if (err) return statusMessage.value = err
    statusMessage.value = body
  })
}
```

:name_badge: This code has two anonymous functions. Let's give em names!

```js
var form = document.querySelector('form')
form.onsubmit = function formSubmit (submitEvent) {
  var name = document.querySelector('input').value
  request({
    uri: "http://example.com/upload",
    body: name,
    method: "POST"
  }, function postResponse (err, response, body) {
    var statusMessage = document.querySelector('.status')
    if (err) return statusMessage.value = err
    statusMessage.value = body
  })
}
```
:information_source: As you can see naming functions is super easy and has some immediate benefits:

:one: makes code easier to read thanks to the descriptive function names
:two: when exceptions happen you will get stacktraces that reference actual function names instead of "anonymous"
:three: allows you to move the functions and reference them by their names
:point_up: Now we can move the functions to the top level of our program:

```js
document.querySelector('form').onsubmit = formSubmit

function formSubmit (submitEvent) {
  var name = document.querySelector('input').value
  request({
    uri: "http://example.com/upload",
    body: name,
    method: "POST"
  }, postResponse)
}

function postResponse (err, response, body) {
  var statusMessage = document.querySelector('.status')
  if (err) return statusMessage.value = err
  statusMessage.value = body
}
```
Note that the function declarations here are defined at the bottom of the file. This is thanks to function hoisting.

##### :two: Modularize

:heavy_exclamation_mark: This is the most important part: Anyone is capable of creating modules (aka libraries). To quote Isaac Schlueter (of the node.js project): "Write small modules that each do one thing, and assemble them into other modules that do a bigger thing. You can't get into callback hell if you don't go there."

:arrow_right: Let's take out the boilerplate code from above and turn it into a module by splitting it up into a couple of files. I'll show a module pattern that works for either browser code or server code (or code that works in both):

Here is a new file called formuploader.js that contains our two functions from before:
___

# :x: 11. Errors

### :x: 1. TypeError: cyclic object value (Firefox) / TypeError: Converting circular structure to JSON (Chrome)

- Circular referencing implies that the 2 objects referencing each other are tightly coupled and changes to one object may need changes in other as well.

- The JavaScript exception "cyclic object value" occurs when object references were found in JSON. JSON.stringify() doesn't try to solve them and fails accordingly.

### :information_source: What went wrong?
The JSON format per se doesn't support object references (although an IETF draft exists), hence JSON.stringify() doesn't try to solve them and fails accordingly.

```js
var circularReference = {otherData: 123};
circularReference.myself = circularReference;
console.log(circularReference); //<ref *1> { otherData: 123, myself: [Circular *1] }
``` 
