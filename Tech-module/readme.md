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
