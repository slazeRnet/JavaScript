# Contents

### 1. Arrays lists advanced
### 2. Associative Arrays
### 3. Functions
### 4. Objects and classes

### accessing objects string notation vs brecket notation
```js
let days = {Monday: 1}
let day = 'Monday'
console.log('result: ', days.day, days[day]); // result: undefined 1
```
### 5. Iterators and iterable

## 1. Arrays lists advanced
## 2. Associative Arrays
## 3. Functions

### 3.1. Function Declaration
they are hoiseted
```js
function printText(){
console.log('Say Hello!')
}
```
### 3.2. Annonimous function
An anonymous function is, as its name implies, a function without a name (no pun intended). They are most popularly used to define function expressions. An example of such usage is shown below.
These function expressions are created at runtime and must be declared/defined before they can be called i.e. they are not hoisted,
:information_source:  unlike function declarations that are hoisted as soon as program execution begins and can be called before its actual declaration.
```js
//printName("Tom");     
//ReferenceError: printName is not definedconst printName = function (name){ 
   console.log(name);
}
printName("Tom");      
//result: Tom
```

Anonymous functions can also be used to promote encapsulation in Immediately Invoked Function Expressions (IIFE). This is illustrated below.

### 3.3. Lambda Expression
On the other hand, lambda expressions are abstractions which enable a function to be passed around like data. In JavaScript, everything can be treated as an object, this means that a function can be sent into another function as a parameter and can also be retrieved from the called function as a return value. An example of lambda expression is as shown below. It supports arrow notation =>.
```js
function traverseArray(arr, func) {
    let result = '';
    for (const value of arr) {
        result += func(value) + ' ';
    }
    console.log(result);
}

const arr = [1, 2, 3, 4, 5];
const doubler = value => value * 2;////alternatively, can be written verbosely as
//const doubler = (value) => {
//    return value * 2;
//}

traverseArray(arr, doubler);      
//result: 2 4 6 8 10 
```
The most salient point which differentiates lambda functions from anonymous functions in JavaScript is that lambda functions can be named. This naming could be of help during debugging. An example which illustrates this is shown below.
```js
function traverseArray(arr, func) {
    let result = '';
    for (const value of arr) {
        result += func(value) + ' ';
    }
    console.log(result);
}

const arr = [1, 2, 3, 4, 5];

traverseArray(arr, function doubler(value) { 
    return value * 2;
});                     
//result: 2 4 6 8 10 
```
This shows that a lambda function is not necessarily anonymous and an anonymous function is not necessarily a lambda expression if it is not passed around like data. The fat (or thin) arrow notation is simply syntactic sugar.

Most of the time, these two constructs are referred to interchangeably, and in some programming languages, finding the difference is like splitting hairs. The most important aspect of programming is grokking the underlying principles surrounding a construct and leveraging it to achieve your goals. Understanding the literature and applying it correctly improves code quality.

If you have any information to add or correct, I will be glad to hear from you. As Robert A. Heinlein said, “I never learned from a man who agreed with me.”

---
## 4. Objects and classes
## 5. Iterators and iterable

### iterable protocol

The iterable protocol allows JavaScript objects to define or customize their iteration behavior, such as what values are looped over in a for...of construct. Some built-in types are built-in iterables with a default iteration behavior, such as Array or Map, while other types (such as Object) are not.

In order to be iterable, an object must implement the @@iterator method, meaning that the object (or one of the objects up its prototype chain) must have a property with a @@iterator key which is available via constant Symbol.iterator:
### The iterator protocol

The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite), and potentially a return value when all values have been generated.

An object is an iterator when it implements a next() method with the following semantics:
Property 	Value
next() 	

A zero-argument function that returns an object with at least the following two properties:

> done (boolean)

    Has the value false if the iterator was able to produce the next value in the sequence. (This is equivalent to not specifying the done property altogether.)

    Has the value true if the iterator has completed its sequence. In this case, value optionally specifies the return value of the iterator.
> value
    Any JavaScript value returned by the iterator. Can be omitted when done is true.

The next() method must always return an object with appropriate properties including done and value. If a non-object value gets returned (such as false or undefined), a TypeError ("iterator.next() returned a non-object value") will be thrown.

```js
// need to construct a String object explicitly to avoid auto-boxing
let someString = new String('hi');

someString[Symbol.iterator] = function () {
  return {
    // this is the iterator object, returning a single element (the string "bye")
    next: function () {
      return this._first ? {
        value: 'bye',
        done: (this._first = false)
      } : {
        done: true
      }
    },
    _first: true
  };
};
```

Notice how redefining @@iterator affects the behavior of built-in constructs that use the iteration protocol:
```js
console.log([...someString]); // ["bye"]
console.log(someString + ''); // "hi"
```
