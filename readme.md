### CONTENT
### [1. Overview](#1-overview-1)
### [2. Design Patterns](#x-2-design-patterns-1)
### [3. Data Types](#3-data-types-1)
### [4. Statements](#4-statements-1)
  #### [4.1. Control Flow](#41-control-flow-1)
  #### [4.2. Declarations](#42-declarations-1)
  #### [4.3. Funtions and Classes](#43-functions-and-classes-1)
##### [4.3.1. function](#431-function-1)
##### [4.3.2. function*](#432-function-2)
##### [4.3.3. async function](#433-async-function-1)
##### [4.3.4. async](#434-async-1)
##### [4.3.5. class](#435-class-1)
#### [4.4. Iterations](#4-iterations-1)
#### [4.5. Other](#45-other-1)
### [5. Expressions & Operations](#5-expressions-operations-1)
### [6. Automation](#6-automation)
### :capital_abcd: [10. Definitions](#capital_abcd-10-definitions-1)
### :x: [11. Errors](#x-11-errors-1)
___
# 1. Overview
- stable API - API stability refers to some level of guarantee from a project that its API will only change in defined ways in the future, or will not change at all.

---
# 2. Design Patterns
- This is a simple and common design pattern in JavaScript. Factory is a creational design pattern allowing us to abstract away object creation implementation details from the outside world. Express does this by only exporting the factory.

### 2.1 Factory Pattern [example](./Design-Patterns/factory.js)

```js

//FACTORY DESIGN PATTERN
function Developer(name){
    this.name = name;
    this.type = "Developer";
}

function Tester(name){
    this.name = name;
    this.type = "Tester";
}

function EmployerFactory(){
    this.create = (name, type) => {
        switch(type){
            case 1: 
            return new Developer(name);
            break;
            case 2: 
            return new Tester(name);
            break;
        }
    }
}

function say(){
console.log(`Hi i am ${this.name} and I am a ${this.type}.`);
}

const employeeFactory = new EmployerFactory();
const employees = [];

employees.push(employeeFactory.create("Patrick", 1));
employees.push(employeeFactory.create("Adam", 2));

employees.forEach(emp => {
    say.call(emp)
})

/*
result: 

Hi i am Patrick and I am a Developer.
Hi i am Adam and I am a Tester.
*/
```

## 2.1 Factory Pattern
---
# 3. Data Types & Values
<details>
    <summary>  :page_with_curl: CONTENT </summary>
    <strong><a href="#31-standart-build-in-objects">3.1. Standart Build in Objects</a></strong>
        <br>
        <a href="#311-value-properties"> 3.1.1. Value Properties</a>
        <br>
        <a href="#312-lack-of-identification-null"> 3.1.1. Lack of Identification (null)</a>
        <br>
     <strong> <a href="#32-function-properties">3.2. Function properties </a></strong>
        <br>
        <a href="#321-eval"> 3.2.1. eval </a>
        <br>
     <strong><a href="#33-fundamental-objects"> 3.3. Fundamental Objects</a></strong>
</details>
        
        
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

### 3.1.10. Control abstraction objects
CONTENT
- Promise
- Generator
- GeneratorFunction
- AsyncFunction
- AsyncGenerator
- AsyncGeneratorFunction

#### 3.1.10.1. Promise

##### 3.1.10.2. Denition and Example

##### 3.1.10.2. :x: Commonon errors while working with promise

###### 3.1.10.2.1. Closure and Callbac func in Promise

Example:

```js
var array = [ ... ]; // An array with some objects
for( var i = 0; i < array.length; ++i )
{
  $.doSthWithCallbacks( function() {
    array[i].something = 42; // Error
  });
}
```
Remember those first JavaScript tutorials you read, where it said that JavaScript is asynchronous? This means that under some circumstances code might not be executed sequentially. This is usually the case when using internal APIs that depend on an external event. For example, processing a response after an HTTP request is completed or after some other processing is done.

So what happens then, is that the doSthWithCallbacks (general expression for all JavaScript function that use a callback) schedules the callback function to be executed at a later stage. But the for loop isn't just scheduling one callback. It's scheduling an array.length worth of callbacks and they most certainly won't be completed within the same for loop iteration. Each of those callbacks will be executed at an unpredictable time later on, when multiple for iterations have gone through, the value if i is different and multiple other callbacks have also been scheduled.

Usually, the callbacks aren't executed until the for loop has completed, at which point i is exactly equal to array.length - 1. So, every time any of the callbacks is executed it will be modifying the last value of the array instead of the value of the for loop iteration it was scheduled on. Of course, as I said, it's unpredictable when the callbacks will be executed and depends on multiple factors the JavaScript interpreter used, the function invoking the callbacks and it's input data. An example is an HTTP request with a success callback that won't be executed before the server sends a response, which could be any time interval between several milliseconds and several minutes.

More info about this error here: [11.4. :x: JavaScript Callbacks Variable Scope Problem](#114-x-javascript-callbacks-variable-scope-problem)

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
 
 ### 3.2.1. eval()  :exclamation:
 - The eval() function evaluates JavaScript code represented as a string.

```js
console.log(eval('2 + 2'));
// expected output: 4

console.log(eval(new String('2 + 2')));
// expected output: 2 + 2

console.log(eval('2 + 2') === eval('4'));
// expected output: true

console.log(eval('2 + 2') === eval(new String('2 + 2')));
// expected output: false
```
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


### CONTENT

#### [4.1. Control Flow](#41-control-flow-1)

[ 4.1.1. Block](#411-block-1)
[ 4.1.2. break](#412-break-1)
[ 4.1.3. continue](#413-continue-1)
[ 4.1.4. Empty](#414-empty-1)
[ 4.1.5. if...else](#415-ifelse-1)
[ 4.1.6. switch](#416-switch-1)
[ 4.1.7. throw](#417-throw-1)
[ 4.1.8. try...catch](#418-trycatch-1)



---
#### [4.2. Declarations](#42-declarations-1)

|       | block scope | binds to this | hoisted | allow redeclaration | allow reinitialization |
|-------|-------------|---------------|---------|---------------------|------------------------|
| var   | no          | if global     | yes     | yes                 | yes                    |
| let   | yes         | no            | no      | no                  | yes                    |
| const | yes         | no            | no      | no                  | no                     |


[ 4.2.1. var](#421-var-1)
[ 4.2.2. let](#422-let-1)
[ 4.2.3. const](#423-const-1)



#### [4.3. Functions and classes](#43-function-and-classes-1)

#### [4.4. Iterations](#44-iterations-1)

#### [4.5. Others](#45-others-1)



---
## 4.3. Functions and classes

#### 4.3.1. function

##### 4.3.1.1. Anonimous function
```js
var func = new function(){
this.property = "some property";
}
return func;
```
 its constructor will point to the anonymous function passed after new operator, and its prototype chain will contain two prototypes, but it won't contain any other method than with an object created with {} or new Object. 

#### 4.3.1.2. new Function()
The function is created with the arguments arg1...argN and the given functionBody.

It’s easier to understand by looking at an example. Here’s a function with two arguments:



```js
let sum = new Function('a', 'b', 'return a + b');

alert( sum(1, 2) ); // 3
```

- And here there’s a function without arguments, with only the function body:

```js
let sayHi = new Function('alert("Hello")');

sayHi(); // Hello
```

The major difference from other ways we’ve seen is that the function is created literally from a string, that is passed at run time.

All previous declarations required us, programmers, to write the function code in the script.

But new Function allows to turn any string into a function. For example, we can receive a new function from a server and then execute it:

```js
let str = ... receive the code from a server dynamically ...

let func = new Function(str);
func();
```

##### 4.3.1.3. Closure
Usually, a function remembers where it was born in the special property [[Environment]]. It references the Lexical Environment from where it’s created (we covered that in the chapter Variable scope, closure).

But when a function is created using new Function, its [[Environment]] is set to reference not the current Lexical Environment, but the global one.

So, such function doesn’t have access to outer variables, only to the global ones.

```js
function getFunc() {
  let value = "test";

  let func = new Function('alert(value)');

  return func;
}

getFunc()(); // error: value is not defined
```

Compare it with the regular behavior:

```js
function getFunc() {
  let value = "test";

  let func = function() { alert(value); };

  return func;
}

getFunc()(); // "test", from the Lexical Environment of getFunc
```

---
#### 4.3.5. class

##### It is not possible to use promise in the constructor
<details>
<summary>Read more</summary>
<strong>This can never work.</strong>
<br>
The async keyword allows await to be used in a function marked as async but it also converts that function into a promise generator. So a function marked with async will return a promise. A constructor on the other hand returns the object it is constructing. Thus we have a situation where you want to both return an object and a promise: an impossible situation.
<br>
You can only use async/await where you can use promises because they are essentially syntax sugar for promises. You can't use promises in a constructor because a constructor must return the object to be constructed, not a promise.
<br>
There are two design patterns to overcome this, both invented before promises were around.
<br>

- 1. Use of an init() function. This works a bit like jQuery's .ready(). The object you create can only be used inside it's own init or ready function:
<br>
Usage:
<br>

<code>

var myObj = new myClass();

myObj.init(function() {

    // inside here you can use myObj

});

</code>
<br>

<br>
- Implementation: 
<br>
<code>
class myClass {

    constructor () {

    }

    init (callback) {

        // do something async and call the callback:

        callback.bind(this)();

    }

}
</code>

<br>
- 2. Use a builder. I've not seen this used much in javascript but this is one of the more common work-arounds in Java when an object needs to be constructed asynchronously. Of course, the builder pattern is used when constructing an object that requires a lot of complicated parameters. Which is exactly the use-case for asynchronous builders. The difference is that an async builder does not return an object but a promise of that object:
<br>
Usage:
<br>
<code>
myClass.build().then(function(myObj) {
    // myObj is returned by the promise, 
    // not by the constructor
    // or builder
});

// with async/await:

async function foo () {
    var myObj = await myClass.build();
}
</code>


<br>
<code>
class myClass {
    constructor (async_param) {
        if (typeof async_param === 'undefined') {
            throw new Error('Cannot be called directly');
        }
    }

    static build () {
        return doSomeAsyncStuff()
           .then(function(async_result){
               return new myClass(async_result);
           });
    }
}
</code>
<br>
- Implementation with async/await:
<br>
<code>
class myClass {
    constructor (async_param) {
        if (typeof async_param === 'undefined') {
            throw new Error('Cannot be called directly');
        }
    }

    static async build () {
        var async_result = await doSomeAsyncStuff();
        return new myClass(async_result);
    }
}
</code>
</details>

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

### 5.1.1.

### 5.1.2.

### 5.1.3. 

### 5.1.4. Generator Function (function*)
- generator function objects created with the GeneratorFunction constructor are parsed when the function is created. This is less efficient than declaring a generator function with a function* expression and calling it within your code, because such functions are parsed with the rest of the code.

-All arguments passed to the function are treated as the names of the identifiers of the parameters in the function to be created, in the order in which they are passed.

:ledger: NOTE: generator function created with the GeneratorFunction constructor do not create closures to their creation contexts; they are always created in the global scope.
When running them, they will only be able to access their own local variables and global ones, not the ones from the scope in which the GeneratorFunction constructor was called.
This is different from using eval with code for a generator function expression.

- Invoking the GeneratorFunction constructor as a function (without using the new operator) has the same effect as invoking it as a constructor.
- hen the iterator's next() method is called, the generator function's body is executed until the first yield expression, which specifies the value to be returned from the iterator:
```js
    function* getGenerator(i) {
            i *= 2;
             yield i;
             yield i + 1;
    }

let iteraorGeneratorFunc = getGenerator(1);

console.log(iteraorGeneratorFunc.next().value); // 2
console.log(iteraorGeneratorFunc.next().value); // 3
console.log(iteraorGeneratorFunc.next().value); // undefined
```

- So for the purpose of creating a iterator you can place the yield keyword inside a recursive function:

#### 3.1.5.1 Simple Example

```js
function* idMaker() {
  var index = 0;
  while (true)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
// ...
```

#### 3.1.5.2. Example with yield*

```js
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
```
#### 3.1.5.3. Passing arguments into generators

```js
function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

var gen = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
gen.next();             // 0
gen.next('pretzel');    // 1 pretzel
gen.next('california'); // 2 california
gen.next('mayonnaise'); // 3 mayonnaise
```

#### 3.1.5.4. Return Statement into generator

```js
function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "unreachable";
}

var gen = yieldAndReturn()
console.log(gen.next()); // { value: "Y", done: false }
console.log(gen.next()); // { value: "R", done: true }
console.log(gen.next()); // { value: undefined, done: true }
```

#### 3.1.5.5. Generator as an Object Property

```js
const someObj = {
  *generator () {
    yield 'a';
    yield 'b';
  }
}

const gen = someObj.generator()

console.log(gen.next()); // { value: 'a', done: false }
console.log(gen.next()); // { value: 'b', done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

#### 3.1.5.6. Generator as an Object Method

```js
class Foo {
  *generator () {
    yield 1;
    yield 2;
    yield 3;
  }
}

const f = new Foo ();
const gen = f.generator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

#### 3.1.5.7. Generator as an Computed Property
```js
class Foo {
  *[Symbol.iterator] () {
    yield 1;
    yield 2;
  }
}

const SomeObj = {
  *[Symbol.iterator] () {
    yield 'a';
    yield 'b';
  }
}

console.log(Array.from(new Foo)); // [ 1, 2 ]
console.log(Array.from(SomeObj)); // [ 'a', 'b' ]

```
#### 3.1.5.8. Generators are not constructable
```js
function* f() {}
var obj = new f; // throws "TypeError: f is not a constructor
```

#### 3.1.5.9. Generator difined in expression
```js
const foo = function* () {
  yield 10;
  yield 20;
};

const bar = foo();
console.log(bar.next()); // {value: 10, done: false}
```
[:point_right: FIBONACI CODE EXAMPLE](JS%20Core/JS%20Applications/01-this/02-fibonacci.js)

### 5.1.5. [yield](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield)
The yield keyword is used to pause and resume a generator function (function* or legacy generator function).
```js
function* getGenerator(i) {
        while(true){
            i *= 2;
             yield i;
            }
    }
    
let iteraorGeneratorFunc = getGenerator(1);

console.log(iteraorGeneratorFunc.next().value); // 2
console.log(iteraorGeneratorFunc.next().value); // 4
console.log(iteraorGeneratorFunc.next().value); // 8
```
- You can also send a value with next(value) into the generator. 'step' evaluates as a return value in this syntax [rv] = yield [expression]

```js
function* counter(value) {
 let step;

 while (true) {
   step = yield ++value;

   if (step) {
     value += step;
   }
 }
}

const generatorFunc = counter(0);
console.log(generatorFunc.next().value);   // 1 step == 'undefined'
console.log(generatorFunc.next().value);   // 2 step == 'undefined'
console.log(generatorFunc.next().value);   // 3 step == 'undefined'
console.log(generatorFunc.next(10).value); // 14 step == 10 // because return value is set to 10
console.log(generatorFunc.next().value);   // 15
console.log(generatorFunc.next(10).value); // 26
```
___

# 6. Automation

## 6.1. Puppeteer Library



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
<br>
:one: makes code easier to read thanks to the descriptive function names
<br>
:two: when exceptions happen you will get stacktraces that reference actual function names instead of "anonymous"
<br>
:three: allows you to move the functions and reference them by their names
<br>
:point_up: Now we can move the functions to the top level of our program:
<br>

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

```js
module.exports.submit = formSubmit

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

The <code>module.exports</code> bit is an example of the node.js module system which works in node, Electron and the browser using browserify. I quite like this style of modules because it works everywhere, is very simple to understand and doesn't require complex configuration files or scripts.

Now that we have <code>formuploader.js</code> (and it is loaded in the page as a script tag after being browserified) we just need to require it and use it! Here is how our application specific code looks now:
```js
var formUploader = require('formuploader')
document.querySelector('form').onsubmit = formUploader.submit
```
:ok_hand: Now our application is only two lines of code and has the following benefits:
<br>
:white_check_mark: easier for new developers to understand -- they won't get bogged down by having to read through all of the formuploader functions
<br>
:white_check_mark: formuploader can get used in other places without duplicating code and can easily be shared on github or npm
<br>

##### :three: Handle every single error
There are different types of errors: syntax errors caused by the programmer (usually caught when you try to first run the program), runtime errors caused by the programmer (the code ran but had a bug that caused something to mess up), platform errors caused by things like invalid file permissions, hard drive failure, no network connection etc. This section is only meant to address this last class of errors.

The first two rules are primarily about making your code readable, but this one is about making your code stable. When dealing with callbacks you are by definition dealing with tasks that get dispatched, go off and do something in the background, and then complete successfully or abort due to failure. Any experienced developer will tell you that you can never know when these errors happen, so you have to plan on them always happening.

With callbacks the most popular way to handle errors is the Node.js style where <strong>the first argument to the callback is always reserved for an error</strong>.
```js
var fs = require('fs')

 fs.readFile('/Does/not/exist', handleFile)

 function handleFile (error, file) {
   if (error) return console.error('Uhoh, there was an error', error)
   // otherwise, continue on and use `file` in your code
 }
```
Having the first argument be the <code>error</code> is a simple convention that encourages you to remember to handle your errors. If it was the second argument you could write code like <code>function handleFile (file) { }</code> and more easily ignore the error.

Code linters can also be configured to help you remember to handle callback errors. The simplest one to use is called standard. All you have to do is run <code>$ standard</code> in your code folder and it will show you every callback in your code with an unhandled error.
<details>
    <summary>:infomation_source: SUMMARY </summary>
   
- Don't nest functions. Give them names and place them at the top level of your program
<br>
- Use function hoisting to your advantage to move functions 'below the fold'
<br>
- Handle every single error in every one of your callbacks. Use a linter like standard to help you with this.
<br>
- Create reusable functions and place them in a module to reduce the cognitive load required to understand your code. Splitting your code into small pieces like this also helps you handle errors, write tests, forces you to create a stable and documented public API for your code, and helps with refactoring.
<br>
</details>
#### 10.1.2. the first argument to the callback is always reserved for an error

### 10.2. :package: Module

#### 10.2.1. :pencil: Rules of thumb when creating a module:

:black_small_square: Start by moving repeatedly used code into a function
<br>
:black_small_square: When your function (or a group of functions related to the same theme) get big enough, move them into another file and expose them using module.exports. You can load this using a relative require
<br>
:black_small_square: If you have some code that can be used across multiple projects give it it's own readme, tests and package.json and publish it to github and npm. There are too many awesome benefits to this specific approach to list here!
<br>
:black_small_square: A good module is small and focuses on one problem
<br>
:black_small_square: Individual files in a module should not be longer than around 150 lines of JavaScript
<br>
:black_small_square: A module shouldn't have more than one level of nested folders full of JavaScript files. If it does, it is probably doing too many things
<br>
:black_small_square: Ask more experienced coders you know to show you examples of good modules until you have a good idea of what they look like. If it takes more than a few minutes to understand what is happening, it probably isn't a very good module.
<br>
___

# :x: 11. Errors

### :x: 11.1. TypeError: cyclic object value (Firefox) / TypeError: Converting circular structure to JSON (Chrome)

- Circular referencing implies that the 2 objects referencing each other are tightly coupled and changes to one object may need changes in other as well.

- The JavaScript exception "cyclic object value" occurs when object references were found in JSON. JSON.stringify() doesn't try to solve them and fails accordingly.

#### :information_source: 12.2. What went wrong?
The JSON format per se doesn't support object references (although an IETF draft exists), hence JSON.stringify() doesn't try to solve them and fails accordingly.

```js
var circularReference = {otherData: 123};
circularReference.myself = circularReference;
console.log(circularReference); //<ref *1> { otherData: 123, myself: [Circular *1] }
``` 

### 11.2. :x: SyntaxError: Unexpected token 'export'

- This occured when using :
> export default {}
on nodeJS app

You are using ES6 Module syntax.

This means your environment (e.g. node.js) must support ES6 Module syntax.

NodeJS uses CommonJS Module syntax (module.exports) not ES6 module syntax (export keyword).

#### Solution:

Use babel npm package to transpile your ES6 to a commonjs target
or

Refactor with CommonJS syntax.
Examples of CommonJS syntax are (from flaviocopes.com/commonjs/):

<code>
exports.uppercase = str => str.toUpperCase()
exports.a = 1
</code>

### 11.3. :x: TypeError: EmailManager is not a constructor

- Class being unproperly used/ Trying to utilise the new keyword but the function is not of type class.

Example:
> emailManager.js
```js
class EmailManager{
  constructor(){
    //....
  }
}

module.exports = {
  EmailManager
}
```

> index.js
```js
const EmailManager = require('./emailManager') // { EmailManager: [Function: EmailManager] }

let emailClient = new EmailManager() // Error
```

#### Solution:
> index.js
```js
const EmailManager = require('./emailManager').EmailManager // { EmailManager: [Function: EmailManager] }

let emailClient = new EmailManager() // Error
```
### 11.4. :x: JavaScript Callbacks Variable Scope Problem

While this code looks perfectly fine, it shows the misunderstanding of a very basic JavaScript concept. This code will return an error because the 
> var array
is not accessable in the callback.

```js
var array = [ ... ]; // An array with some objects
for( var i = 0; i < array.length; ++i )
{
  $.doSthWithCallbacks( function() {
    array[i].something = 42;
  });
}
```

#### Explanation
Remember those first JavaScript tutorials you read, where it said that JavaScript is asynchronous? This means that under some circumstances code might not be executed sequentially. This is usually the case when using internal APIs that depend on an external event. For example, processing a response after an HTTP request is completed or after some other processing is done.

So what happens then, is that the doSthWithCallbacks (general expression for all JavaScript function that use a callback) schedules the callback function to be executed at a later stage. But the for loop isn't just scheduling one callback. It's scheduling an array.length worth of callbacks and they most certainly won't be completed within the same for loop iteration. Each of those callbacks will be executed at an unpredictable time later on, when multiple for iterations have gone through, the value if i is different and multiple other callbacks have also been scheduled.

#### How to work around it

- Closure in a function
This method is relatively easy to understand and that is why I won't be covering it in much detail. This isn't the case with inline closures, so I will cover that in depth. The 
> callbackClosure 
function returns a function that invokes the actual callback with an explicit copy of <code>i</code> as an argument.
```js
var array = [ ... ]; // An array with some objects

function callbackClosure(i, callback) {
  return function() {
    return callback(i);
  }
}

for( var i = 0; i < array.length; ++i )
{
  API.doSthWithCallbacks( callbackClosure( i, function(i) {
    array[i].something = 42;
  }) );
}
```


Since each function declares it's own scope, and i has a base atomic type (int) it is not passed as a reference, but rather as a copy (unlike objects) which ensures that the actual callback will be executed against the correct value.

- Inline closure




