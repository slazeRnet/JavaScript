### CONTENT
### [1. Overview](#1-overview-1)
### [2. Definitions](#1-definitions-1)
### [3. Data Types](#3-data-types)
### [11. Errors](#11-errors-1)

---
# 1. Overview
- stable API - API stability refers to some level of guarantee from a project that its API will only change in defined ways in the future, or will not change at all.

---
# 2. Definitions

---
# 3. Data Types
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

## 3.2. Function properties
<details>
    <summary> All Function Properties </summary>
    
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



### 3.7. Indexed collections
- Reversing a string (incidentally, a common
JavaScript interview trivia question!). arrays have a reverse()
in-place mutator method, but strings do not:
```js
text.reverse; // undefined
arr.reverse(); // ["!","o","O","f"]
arr; // ["!","o","O","f"]
```



#### 3.1.4.1. Array
#### 3.1.4.2. Int8Array
#### 3.1.4.3. Uint8Array
#### 3.1.4.4. Uint8ClampedArray
#### 3.1.4.5. Int16Array
#### 3.1.4.6. Uint16Array
#### 3.1.4.7. Int32Array
#### 3.1.4.8. Uint32Array
#### 3.1.4.9. Float32Array
#### 3.1.4.10. Float64Array
#### 3.1.4.11. BigInt64Array
#### 3.1.4.12. BigUint64Array


### 3.XXX. Statements and Declarations
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

## 3.2. Function Properties

## 3.3. 
---
# 11. Errors

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
