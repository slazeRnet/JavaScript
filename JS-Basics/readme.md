## CONTENT
### [1. Simple Operations](#1-simple-operations-1)
### [2. Conditions Statements](#2-condition-statements-1)
### [3. Nested Condition Statements](#3-nested-condition-statements-1)
### [4. While Loops](#4-while-loops-1)

# 1. Simple Operations
### 1.1. flip the value of a bool variable
```js
  let state = {xIsNext: true}
      state = {xIsNext: !state.xIsNext, }
  console.log(state.xIsNext) //false
```

### 1.2. Conversion to bool

```js
let a = 0
let b = 1

console.log(!!a); //false
console.log(!!b); //true

```
### 1.3. Incrementing a string returns NaN
:information_source: ('b'+'a'+ + 'a' + 'a').toLowerCase() returns 'banana'?
> +'a' 
resolves to NaN ("Not a Number") because it coerces a string to a number, while the character a cannot be parsed as a number.
# 2. Condition Statements

### 1. default value of argument

<<<<<<< HEAD
:information_source:  If the constructor is called with no argument the value of *this.data* is set to "There is no data".

=======
:information_source:   If the constructor is called with no argument the value of 
*this.data*
is set to "There is no data"
>>>>>>> 5dfe4b48057449482e8410329cbf971080a827ac

```js
constructor(data){
this.data = data || "There is no data"
}
```
</br>
- :warning:   Potential bugs
  - 0 and '' are treated as falsy.

- So there is the defaults function to set default value
```js
 _.defaults(options, {fruit: "strawberry"})
 ```
 </br> or even better:

 ```js
 constructor(data = "There is no data"){
this.data = data
 ```
 

This works because the OR operator isn’t restricted to combining Boolean values. All it does is return the first value if it’s truthy and the second value if the first value is falsy.
# 3. Nested Condition Statements
# 4. While Loops
---
