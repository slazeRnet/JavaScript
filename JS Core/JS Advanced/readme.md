CONTENT:
# 1.  [01-Syntax-Functions-and-Statements](##01-Syntax-Functions-and-Statements)
# 2. [02-Arrays](##02-Arrays/)
# 3. [03-Objects](./03-Objects/)
# 4. [04-Functions](./04-Functions/)
# 5. [05-DOM](./05-DOM/)
# 6. [06-DOM-MANIPULATIONS](./06-DOM-MANIPULATIONS/)
# 7. [07-CLASSES](./07-CLASSES/)
# 8. [08-UNIT-TESTING](./08-UNIT-TESTING/)
# 9. [09-RegExp](./09-RegExp/)
# 10. [10-EXAMS](./10-EXAMS/)

---

# 1. [01-Syntax-Functions-and-Statements](./01-Syntax-Functions-and-Statements/)

 **1. Dynamic Programming Language**

- JavaScript is a dynamic programming language
- Operations otherwise done at compile-time can be done at run-time
- It is possible to change the type of a variable or add new properties or methods to an object while the program is running
- In static programming languages, such changes are normally not possible

 **2. Data Types**

**2.1 Seven data types that are primitives**

-String - used to represent textual data
-Boolean - a logical data type 
-Undefined - automatically assigned to variables 
-Number -  a numeric data type
-Null - represents the intentional absence of any object value
-BigInt - represent integers with arbitrary precision
-Symbol - unique and immutable primitive value
**2.2 Object**

**3.Identifiers**

- An identifier is a sequence of characters in the code that identifies a variable, function, or property
- An identifier differs from a string 
in that a string is data, while an identifier is part of the code
- In JavaScript, identifiers are case-sensitive and can contain Unicode letters, $, _, and digits (0-9), but may not start with a digit

**3.Variable Values**
- Used to store data values
- Variables that are assigned a non-primitive value are given a reference to that value
- Undefined - a variable that has been declared with a keyword, but not given a value
```js
let a;
console.log(a) //undefined
```

- Undeclared - a variable that hasn't been declared at all
```js
console.log(undeclaredVariable);
//ReferenceError: undeclaredVariable is not defined
```

- let, const and var are used to declare variables
- let - for reassigning a variable
```js
let name = "George";    
name = "Maria";
```
- const - once assigned it cannot be modified
```js
const name = "George";  
name = "Maria";  // TypeError

```

 -var - defines a variable in the lexical scope regardless of block scope
```js
var name = "George";    
name = "Maria";
```

**3. Dynamic Typing**
- Variables in JavaScript are not directly associated with any particular value type
- Any variable can be assigned (and re-assigned) values of all types
```js
let foo = 42;    // foo is now a number
foo = 'bar';     // foo is now a string
foo = true;      // foo is now a boolean
```

**4. Strict Mode**

- Strict mode - helps you to write cleaner code
- Strict mode is declared by adding "use strict";
- Declared at the beginning of a script, it has global scope
- Declared inside a function, it has local scope
- The "use strict" directive is only recognized at the beginning of a script or a function
```js
"use strict";
x = 3.14; // This will cause an error because x is not declared

```

```js
x = 3.14;       // This will NOT cause an error.
 
myFunction();

function myFunction() {
    "use strict";
    y = 3.14;   // This will cause an error
}
```

**5. Fixed Values**
- Fixed values - literals
- Array Literals:  list of zero or more array elements, enclosed in square brackets ([ ])
```js
let cars = ["Ford", "BMW", "Peugeot"];
let arrayLength = cars.length;  // 3
let secondCar = cars[1];        // "BMW"

```

- Object Literals: 
- List of zero or more pairs of property names 
Associated values of an object, enclosed in curly braces { }

**II. Arithmetic, Assignment, Comparison, Logical Operators**

- Arithmetic operators - take numerical values (either literals or variables) as their operands
- Return a single numerical value
- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)
- Remainder (%)
- Exponentiation (**)

```js
let a = 15;
let b = 5;
let c;
c = a + b; // 20
c = a - b; // 10
c = a * b; // 75
c = a / b; // 3
c = a % b; // 0
c = a ** b;//155 = 759375

```

- Assignment operators - assign a value to its left operand based on the value of the right operand

```js
x = y
x += y
```

**1. Comparison Operators**
```js
== // equal value
=== // equal value & type
```
Example:
```js
console.log(1 == '1'); // true
console.log(1 === '1');// false
console.log(3 != '3'); // false
console.log(3 !== '3');// true
console.log(5 < 5.5);  // true
console.log(5 <= 4);   // false
console.log(2 > 1.5);  // true
console.log(2 >= 2);   // true
console.log(5 ? 4 : 10);// 4
```

**2. Truthy and Falsy Values**
- "truthy" -  a value that coerces to true when evaluated in a boolean context
- There are only six "falsy" values  - false, null, undefined, NaN, 0 and ""  

```js
logTruthiness (3.14);      //Truthy!
logTruthiness ({});        //Truthy!
logTruthiness (NaN);       //Falsy.
logTruthiness ("NaN");     //Truthy!
logTruthiness ([]);        //Truthy!
logTruthiness (null);      //Falsy.
logTruthiness ("");        //Falsy.
logTruthiness (undefined); //Falsy.
logTruthiness (0);         //Falsy.
```

**3. Logical Operators**

- && (logical AND) -  returns the leftmost "false" value
- || (logical OR) - returns the leftmost "true" value
- ! (logical NOT) - Returns false if its single operand can be converted to true; otherwise, returns true

**4. Typeof Operator**

- The typeof operator returns a string indicating the type of an operand
```js
let val = 5; 
console.log(typeof val);    // number

let str = 'hello'; 
console.log(typeof str);    // string

let obj = {name: 'Maria', age:18};
console.log(typeof obj);   // object
```

**5. Instanceof Operator**

- The instanceof operator returns true if the current object is an instance of the specified object

```js
let cars = ["Saab", "Volvo", "BMW"]; 
console.log(cars instanceof Array);  // Returns true
console.log(cars instanceof Object); // Returns true
console.log(cars instanceof String); // Returns false
console.log(cars instanceof Number); // Returns falsе

```

**6. Functions**

- Function - named list of instructions (statements and expressions)
- Can take parameters and return result
- Function names and parameters use camel case
- The { stays at the same line

- Declaring Functions

- Function declaration

```js
function walk() {
    console.log("walking");
}

```
- Function expression

```js
let walk = function (){
    console.log("walking");
}

}

```
- Arrow functions

```js
let walk = () => {
    console.log("walking");
}


```

- You can istantialize parameters with no value
- The unused parameters are ignored

**7. Default Function Parameter Values**

- Functions can have default parameter values
```js
function printStars(count = 5) {
    console.log("*".repeat(count));
}

```

**8. Function Overloading**

- In C# / Java / C++ functions can be overloaded
- Function overloading == same name, different parameters
- JavaScript (like Python and PHP) does not support overloading

```js
function printName(firstName, lastName) {
  let name = firstName;
  if (lastName != undefined) { // overloading is done by parameters check
     name += ' ' + lastName;
  }
  console.log(name);
}

```

**9. Arguments**

- Arguments - object which looks like array
- Through arguments you can access parameters that are not passed in the function
- In arrow functions you don't have access to arguments
- Changing the arguments object is not a good practice

```js
function foo(a,b,c){
  console.log(arguments[0]); // 1
  console.log(arguments[4]); // 7
  console.log(arguments[3] + arguments[4]); // 13
  console.log(arguments); 
// [Arguments] { '0': 1, '1': 2, '2': 3, '3': 6, '4': 7 }
}
foo(1,2,3,6,7)

```

**10. First Class function**

- First-class functions-   a function can be passed as an argument to other functions
- Can be returned by another function and can be assigned as a value to a variable

```js
function running() {
    return "Running";
}
function category(run, type) {
    console.log(run() + " " + type); // callback function 
}
category(running, "sprint");

```

**11. Hoisting**

- Variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code
- Only declarations are hoisted

**- Hoisting Variables**

```js
console.log(num); // Returns undefined 
var num;
num = 6;

```

```js
num = 6;
console.log(num); // returns 6
var num;


```

```js
num = 6;
console.log(num); // ReferenceError: num is not defined
let num;


```

```js
console.log(num); // ReferenceError: num is not defined
num = 6;

```


**12. Hoisting Functions**

```js
run(); // running
function run() {
    console.log("running");
};

```

```js
walk(); // ReferenceError: walk is not defined
let walk = function () {
    console.log("walking");
};


```
```js
console.log(walk); //undefined
walk(); // TypeError: walk is not a function
var walk = function () {
    console.log("walking");
};


```

**13. Nested function**

- Functions can be nested - hold other functions
- Inner functions have access to variables from their parent
```js
function hypotenuse(m, n) { // outer function
    function square(num) {  // inner function
        return num * num;
    }
    return Math.sqrt(square(m) + square(n));
}

```



---
# 2. [02-Arrays](./02-Arrays/)

**1. What is an Array?**

- Arrays are list-like objects
- Arrays are a reference type, the variable points to an address in memory
- Elements are numbered from 0 to length - 1
- Creating an array using an array literal
- Neither the length of a JavaScript array nor the types of its elements are fixed
- An array's length can change at any time
- Data can be stored at non-contiguous locations in the array
- JavaScript arrays are not guaranteed to be dense

**2. Arrays of Different Types**

```js
// Array holding strings
let weekDays = ['Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday', 'Sunday'];

```

```js
// Array holding mixed data (not a good practice)
let mixedArr = [20, new Date(), 'hello', {x:5, y:8}];

```


**3. Arrays Indexation**

- Setting or accessing via non-integers using bracket notation (or dot notation) will not set or retrieve an element from the array list itself
- It will set or access a variable associated with that array's object property collection
- The array's object properties and list of array elements are separate

```js
let arr = [];
arr[3.4] = 'Oranges';
arr[-1] = 'Apples';
console.log(arr.length);                // 0
console.log(arr.hasOwnProperty(3.4));   // true

arr["1"] = 'Grapes';
console.log(arr.length);                // 2
console.log(arr); // [ <1 empty item>, 'Grapes', '3.4': 'Oranges', '-1': 'Apples' ]

```

**4. Accessing Array Elements**

- Array elements are accessed using their index number
- Accessing indexes that do not exist in the array returns  undefined
- Array elements are object properties
- Trying to access an element of an array as follows throws a syntax error because the property name is not valid
```js
let years = [1950, 1960, 1970, 1980, 1990, 2000];
console.log(years.0);   // a syntax error
console.log(years[0]);  // works properly

```

**5. Splice**

- Changes the contents of an array by removing or replacing existing elements and/or adding new elements

```js
let nums = [1, 3, 4, 5, 6];
nums.splice(1, 0, 2); // inserts at index 1
console.log(nums); // [ 1, 2, 3, 4, 5, 6 ]nums.splice(4,1,19); // replaces 1 element at index 4
console.log(nums); // [ 1, 2, 3, 4, 19, 6 ]let el = nums.splice(2,1); // removes 1 element at index 2
console.log(nums); // [ 1, 2, 4, 19, 6 ]
console.log(el); // [ 3 ]

```

**6. Fill**
- Fills all the elements of an array from a start index to an end index with a static value
```js
let arr = [1, 2, 3, 4];// fill with 0 from position 2 until position 4
console.log(arr.fill(0, 2, 4)); // [1, 2, 0, 0]// fill with 5 from position 1
console.log(arr.fill(5, 1)); // [1, 5, 5, 5]console.log(arr.fill(6)); // [6, 6, 6, 6]

```


**7. Reverse**

- Reverses the array
- The first array element becomes the last, and the last array element becomes the first
```js
let arr = [1, 2, 3, 4];
arr.reverse();
console.log(arr); // [ 4, 3, 2, 1 ]

```

**8. Sort**

- The sort() method sorts the elements of an array in place and returns the sorted array
- The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values
- The time and space complexity of the sort cannot be guaranteed 
- It depends on the implementation

- default sort:

```js
let array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); // [1, 100000, 21, 30, 4]

```
- custom sort:
```js
let array2 = [1, 30, 4, 21, 100000];
array2.sort(compareNumbers);
console.log(array2); // [ 1, 4, 21, 30, 100000 ]function compareNumbers(a, b) { return a - b; }

```


**9. Sorting Objects**

```js
let items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 }
];
// sort by value
items.sort(function (a, b) {// sort by value
    return a.value - b.value;
});
// sort by name
items.sort(function (a, b) {
    let nameA = a.name.toUpperCase(); // ignore upper and lowercase
    let nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) { return -1; }
    if (nameA > nameB) { return 1; }
    return 0;
});

```
**10. Slice**

The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included)
The original array will not be modified

```js
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
let citrus = fruits.slice(1, 3);
let fruitsCopy = fruits.slice();
// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']

```

**11.Filter**

```js
function isBigEnough(value) { 
	return value >= 10; 
};
let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

```

```js
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']; // Filter array items based on search criteria (query)
function filterItems(arr, query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
};console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']


```
**12. Find**

- Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found

```js
let array1 = [5, 12, 8, 130, 44];let found = array1.find(function(element) {
  return element > 10;
});console.log(found); // 12

```

**13. Some**

- The some() method tests whether at least one element in the array passes the test implemented by the provided function
 - It returns a Boolean value

```js
let array = [1, 2, 3, 4, 5];
let even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};
console.log(array.some(even)); //true

```
**14. Map**

- Creates a new array with the results of calling a provided function on every element in the calling array

```js
let numbers = [1, 4, 9];
let roots = numbers.map(function(num) {
	return Math.sqrt(num)
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]

```
reformatting array of objects:
```js
const myUsers = [
    { name: 'chuloo', likes: 'grilled chicken' },
    { name: 'chris', likes: 'cold beer' },
    { name: 'sam', likes: 'fish biscuits' }
];
const usersByFood = myUsers.map(item => {
    const container = {};    container[item.name] = item.likes;
    container.age = item.name.length * 10;    return container;
});
console.log(usersByFood);

```


**15. Reduce**

- The reduce() method executes a reducer function on each element of the array, resulting in a single output value
```js
const array1 = [1, 2, 3, 4];
const reducer = 
(accumulator, currentValue) => accumulator+currentValue;console.log(array1.reduce(reducer)); // 10
console.log(array1.reduce(reducer, 5)); // 15

```

- The reduce method accepts 2 parameters
- Reducer function
- Initial value

**15.1 Reducer Function**

- **The reducer function takes four arguments:**
- Accumulator 
- Current Value 
- Current Index (Optional)
- Source Array (Optional)
- Your reducer function's returned value is assigned to the accumulator
- Accumulator's value - the final, single resulting value

- Sum of values in an object array - you must supplyan initial value
```js
let initialValue = 0;
let sum = [{x: 1}, {x: 2}, {x: 3}]
	.reduce(function (acc, curr) {
    	return acc + curr.x;
	}, initialValue);console.log(sum) // 6

```

---
# 3. [03-Objects](./03-Objects/)

## 1. What is an Object?

- An object is a collection of fields, and a field is an association between a name (or key) and a value
- A field's value can be a function, in which case it is known as a method
- Objects are a reference data type 

- The in-memory value of a reference type is the reference itself (a memory address)
- Unassigned properties of an object are undefined
- Methods are stored in properties as function definitions
- Objects in JavaScript hold key-value pairs:

## 2. Assigning and Accessing Properties

- Simple dot-notation
> person.name = "Peter";
- Bracket-notation
> person['age'] = 21;

## 3. this

- The this keyword refers to the current object the code is being written inside
```js
const person = {
    firstName: 'John',
    lastName: 'Doe',
    returnThis: function(){
        return this;
    }
}
console.log(person.returnThis());
//{ firstName: 'John', lastName: 'Doe', returnThis: [Function: returnThis] }

```

- This will always ensure that the correct values are used when a member's context changes

## 4. Internal Properties

+ Every object field has four properties:
- Enumerable - can access to all of them using a for…in loop 
Enumerable property are returned using Object.keys method
- Configurable - can modify the behavior of the property
You can delete only configurable properties
- Writable - can modify their values and update a property just assigning a new value to it
- Value

## 5. Object's Non-enumerable Properties

- They won't be in for..in iterations
- They won't appear using Object.keys function
- They are not serialized when using JSON.stringify
```js
let ob = {a:1, b:2};
ob.c = 3;
Object.defineProperty(ob, 'd', { value: 4, enumerable: false });
ob.d; // => 4
for( let key in ob ) console.log( ob[key] ); //1 2 3
Object.keys( ob );  // => ["a", "b", "c"]
JSON.stringify( ob ); // => "{a:1,b:2,c:3}"
ob.d; // => 4

```


## 6. Object's Non-writable Properties

- Once its value is defined, it is not possible to change it using assignments

```js
let ob = { a: 1 };
Object.defineProperty(ob, 'B', { value: 2, writable: false });
ob.B; // => 2
ob.B = 10;
ob.B; // => 2

```
- If the non-writable property contains an object, the reference to the object is what is not writable, but the object itself can be modified

## 7. Object's Non-configurable Properties

- Once you have defined the property as non-configurable, there is only one behavior you can change
- If the property is writable, you can convert it to non-writable
- Any other try of definition update will fail throwing a TypeError

```js
let ob = {};
Object.defineProperty(ob, 'a', { configurable: false, writable: true });Object.defineProperty(ob, 'a', { enumerable: true }); // throws a TypeError
Object.defineProperty(ob, 'a', { value: 12 }); // throws a TypeError
Object.defineProperty(ob, 'a', { writable: false }); // This is allowed!!
Object.defineProperty(ob, 'a', { writable: true }); // throws a TypeError
delete ob.a; // => false

```

## 7. Object Freeze and Seal

freeze :
```js
let cat = { name: 'Tom', age: 5 };
Object.freeze(cat);
cat.age = 10;         // Error in strict mode
cat.gender = 'male';  // Error in strict mode
console.log(cat);     // { name: 'Tom', age: 5 }

```
seal :
```js
cat = { name: 'Tom', age: 5 };
Object.seal(cat);
cat.age = 10;         // OK
delete cat.age;       // Error in strict mode
console.log(cat);     // { name: 'Tom', age: 10 }

```


## 8. Object keys and Values

```js
let course = { name: 'JS Core', hall: 'Open Source' };
let keys = Object.keys(course);
console.log(keys);  // [ 'name', 'hall' ]
if (course.hasOwnProperty('name')) {
    console.log(course.name);  // JS Core 
}

```


```js
let values = Object.values(course);
console.log(values); // [ 'JS Core', 'Open Source' ]
if (values.includes('JS Core')) {
    console.log("Found 'JS Core' value");
}

```

## I. JavaScript Object Notation (JSON)

## 9. What is JSON?
- Stands for JavaScript Object Notation
- It's a data interchange format
- It's language independent - syntax is derived from JavaScript object notation syntax, but the JSON format is text only
- Is "self-describing" and easy to understand

+ **Syntax Rules**
- Data is in name/value pairs
- Data is separated by commas
- Curly braces hold objects
- Square brackets hold arrays
- JSON only takes double quotes ""
>{
>   "employees": [{ "firstName": "John", "lastName": "Doe" }]
>}

---
# 4. [04-Functions](./04-Functions/)

## 1. First-Class Functions

- Can be passed as an argument to another function
```js
function sayHello() {
    return "Hello, ";
}	

function greeting(helloMessage, name) {
    return helloMessage() + name;
}   	  

console.log(greeting (sayHello, "JavaScript!"));
// Hello, JavaScript!

```

- Can be returned by another function
- We can do that, because we treated functions in JavaScript as a value

```js
function sayHello() {
    return function () {
        console.log('Hello!');
    }
}

```

- Can be assigned as a value to a variable

```js
const write = function () {
    return "Hello, world!";
}	  
console.log(write()); // Hello, world!  

```

- That function can be invoked by adding parentheses "()" at the end after the variable name

## 2. Higher-Order Functions 

- Take other functions as an argument or return a function as a result
```js
const sayHello = function () {
  return function () {
     console.log("Hello!");
  }
}		  
const myFunc = sayHello();
myFunc(); // Hello!

```

## 3. Currying

```js
function sum3(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }    }}
console.log(sum3(5)(6)(8)); // 19


```
+ Usage
- Template functions
- Code reuse
- Partial implementation
- Retain scope

- Converting a function with a given number of arguments into a function with smaller number of arguments
- Pass the remaining parameters when a result is needed
- The partially applied function can be used multiple times

without curring:
```js
f(x, y) = x + y
```
with curring:
```js
g(x) = f(1, x)
```


## 4. Currying vs Partial Application

- Currying always produces nested unary functions
- Partial application produces functions of arbitrary numberof arguments
- Currying is NOT partial application
- It can be	 implemented using partial application


## 5. Immediately-Invoked Function Expressions (IIFE)

- Define anonymous function expression
- Invoke it immediately after declaration

```js
(function () { let name = "Peter"; })();
// Variable name is not accessible from the outside scope
console.log(name); // ReferenceError
```

```js
let result = (function () {
    let name = "Peter"; 
    return name; 
})(); 
// Immediately creates the output: 
console.log(result); // Peter

```

## Library or dependency in Node JS
lib.js
```js
module.exports = {
    func(param){
        console.log(param);
        
    }
}
```
index.js
```js
const lib = require('./lib')
var func = lib.func

func('someth') // someth
```

## 6. Closure

- One of the most important features in JavaScript
- The context of an inner function includes the scope of the outer function
- An inner function enjoys that context even after the parent function have returned

- A state is preserved in the outer function (closure)
```js
const f = (function () {
    let counter = 0;
    return function () {
        console.log(++counter);
    }
})();// fo each call returns: 1, 2, 3, 4,  5,...

```
Is there any reason to define module.exports using an IIFE?

The reason to maybe sometimes do this is because if you don't, then any variables you need for the module.exports object have to be scoped to the entire file.

Consider these two ways.
    1. Without IIFE.
```js
    var foo = 'la' + 'la';  // some computed value

    //
    // ... lots of program code here ...
    //

    module.exports = {
        foo : foo,
    };
 ```
 2. With IIFE.
```js
//
// ... lots of program code here ...
//

module.exports = (function () {
    var foo = 'la' + 'la';  // some computed value
    return {
        foo : foo
    }
}());
 ```
-  In the first example, two problems arise.

  Your variables (like foo) are created quite far away from where they are used to export a value from the module. This can reduce clarity. Sure, you can declare a variable after the program code, but it still has the same scope (and vars are hoisted). Plus, general best practice is to declare all your variables up front, and not doing so is a tradeoff to consider.
  The program code can mess around with your variables, intentionally or accidentally, which complicates things and is undesirable unless you need that (sometimes you do).

 
---
# 5. [05-DOM](./05-DOM/)
*Document Object Model (DOM)*

## 1. What is DOM?

- The DOM represents the document as nodes and objects
- That way, the programming languages can connect to the page
- DOM is a standard of how to:
- Get HTML element
- Change HTML element
- Add HTML element
- Delete HTML element

## 2. HTML DOM

- The HTML DOM is an Object Model for HTML. It defines:
- HTML elements as objects
- Properties for all HTML elements
- Methods for all HTML elements
- Events for all HTML elements



## 3.  DOM Methods

- DOM Methods - actions you can perform on HTML elements
- DOM Properties - values of HTML elements that you can set or change

- HTML DOM property is a value that you can get or set (changing the content of an HTML element)

+ There are a few ways to find a certain HTML element in the DOM:
- By id - getElementById()
- By tag name - getElementsByTagName()
- By class name - getElementsByClassName()
- By CSS selector - querySelector()


## 4. CSS Selectors

+ CSS selectors are strings that follow CSS syntax for matching
+ They allow very fast and powerful element matching, e.g.:
- "#main" - returns the element with ID "main"
- "#content div" - selects all <div>s inside #content
- ".note, .alert" - all elements with class "note" or "alert"
- "input[name='login']" - <input> with name "login"


## 5. DOM Manipulations

+ The HTML DOM allows JavaScript to change the content of HTML elements
- innerHTML
- attributes
- setAttribute()
- style.property

+ We can create, append and remove HTML elementsdynamically
- removeChild()
- appendChild()
- replaceChild()
- document.write()


## 6. Creating DOM elements

+ Create a copy / cloning DOM element
```js
let li = document.getElementById("my-list");
let newLi = li.cloneNode(true);
```

## 7. Deleting DOM elements
```html
<div id="div1">
    <p id="p1">This is a paragraph.</p>
    <p id="p2">This is another paragraph.</p>
</div>
```

```js
let parent = document.getElementById("div1");
let firstChild = document.getElementById("p1");
let secondChild = document.getElementById("p2");
firstChild.remove();
parent.removeChild(secondChild);
```


## 8. Properties vs. Attributes

- Attributes are defined by HTML. Properties are defined by the DOM
- Attributes initialize DOM properties 
- Property values can change
- Attribute values can't
- The HTML attribute and the DOM property are not the same thing, even when they have the same name


## 8. HTML Attributes and methods

+ getAttribute() - returns the value of attributes ofspecified HTML element

```html
<input type="text" name="username"/>
<input type="password" name="password"/>
```

```js
const inputEle = document.getElementByTagName('input')[0];
inputEle.getAttribute('type'); // text
inputEle.getAttribute('name'); // username
```

+ setAttribute() -  sets the value of an attribute on thespecified HTML element
```html
<input type="text" name="username"/>
<input type="password" />

```

```js
const inputPassEle = document.getElementsByTagName('input')[1];
inputPassEle.setAttribute('name', 'password'); 
```
result:
```html
<input type="text" name="username"/>
<input type="password" name="password"/>
```

+ removeAttribute() -  removes the attribute with the specified name  from an HTML element
```html
<input type="text" name="username" placeholder="Username..."/>
<input type="password" name="password" placeholder="Password..."/>
```

```js
const inputPassEle = document.getElementsByTagName('input')[1];
inputPassEle.removeAttribute('placeholder');
```
result:
```html
<input type="text" name="username" placeholder="Username..."/>
<input type="password" name="password"/>
```

+ hasAttribute() -  method returns true if the specifiedattribute exists, otherwise it returns false
```html
<input type="text" name="username" placeholder="Username..."/>
<input type="password" name="password" id="password"/>
```

```js
const passwordElement = document.getElementById(password');
passwordElement.hasAttribute('name'); // true 
passwordElement.hasAttribute('placeholder'); // false
```


## 9. Parents and Child Elements

+ Every DOM Elements has a parent
- Parents can be accessed by keywords .parent or.parentNode

```js
let firstP = document.getElementsByTagName('p')[0];
console.log(firstP.parent);
```

- appendChild - Adds a new child, as the last child 

```js
let p = document.createElement("p");
let li = document.createElement("li");
li.appendChild(p);

```

- prepend - Adds a new child, as the first child
```js
let ul = document.getElementById("my-list");
let li = document.createElement("li");
ul.prepend(li);

```

## 10. NodeList vs. HTMLCollection

- Both interfaces are collections of DOM nodes
- NodeList can contain any node type
- HTMLCollection is supposed to only contain Element nodes
- An HTMLCollection provides the same methods as a NodeList and additionally a method called namedItem


## 11. DOM Events

- Events are actions or occurrences 
- They allow JavaScript to register different event handlers on elements
- Events are normally used in combination with functions, and the function will not be executed before the event occurs

```js
htmlRef.addEventListener( 'click' , handler );
```

## 12. Browser Object Model (BOM)

+ Browsers expose some objects like window, screen,   navigator, history, location, document, …
```js
console.dir(window);
console.dir(navigator);
console.dir(screen);
console.dir(location);
console.dir(history);
console.dir(document);

alert(window.navigator.userAgent);
// OS and browser
console.log(navigator.language);
// en-US
console.log(screen.width + " x " + screen.height);
// 1920 x 1080
document.location = "https://softuni.bg";
history.back();

```

# 6. [06-DOM-MANIPULATIONS](./06-DOM-MANIPULATIONS/)
+ S Approach to I/O
- Single threaded language
- HTTP requests
- DB
- Memory and disk read/write

+ Don't Make the Thread Wait
- Blocking thread requests
- Register a callback
- Handle multiple concurrent operations on one thread



## 1. Event Object

- Calls its associated function
- Passes a single argument to the function - a reference to the event object
- Contains a number of properties that describe the event that occurred

**Event Object Properties and Methods**

+ Properties
- target
- timeStamp
- isTrusted
- clientX/Y
+ Methods
- preventDefault
- stopPropagation
- stopImmediatePropagation

---

# 7. [07-CLASSES](./07-CLASSES/)

## 1. Definition
- Structure for objects
- Classes define:
- Data (properties, attributes)
- Actions (behavior)
- One class may have many instances (objects)
- The class syntax has two components: 
- Class Expressions and Class Declarations


## 2. Class Expression
- Another way to define a class
- Class expressions can be named or unnamed 

```js
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
```

```js
let Rectangle = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

```
## 3. Hoisting

- Function declarations are hoisted and class declarations are not
- You first need to declare your class and then access it, otherwisea ReferenceError will be thrown
```js
const p = new Rectangle(); // ReferenceError
class Rectangle {}
```

- Class expressions are subject to the same hoisting restrictions



## 4. Class body

- The constructor is a special method for creating and initializingan object created with a class
- A SyntaxError will be thrown if a class contains more than oneoccurrence of a constructor method


## 5. Prototype

- Objects inherit properties and methods from a prototype
- The Prototype Property allows you to add new properties to object constructors
```js
function Person(first, last, age) { 
    this.firstName = first;
    this.lastName = last;
    this.age = age; 
} 
Person.prototype.nationality = "Bulgarian";
```


## 6. Prototype methods

- Before ES2015 (ES6), classes were composed manually
```js
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function () {
    return this.width * this.height;
}

let rect = new Rectangle(3, 5);

```


## 7. Static methods

- The static keyword defines a static method for a class
```js
static staticMethod() { return 'Static method has been called'; }
```

- Called without instantiating their class and cannot be called through a class instance
- To call a static method of the same class, you can use the this keyword
```js
static anotherStaticMethod() {
    return this.staticMethod() + ' from another method';
}
```

## 8. Accessor properties
```js
class Circle {
    constructor(radius) { this.radius = radius; }
    get diameter() { return 2 * this.radius; }
    set diameter(diameter) {
        this.radius = diameter / 2;
    }
    get area() {
        return Math.PI * this.radius * this.radius;
    }
}
```



## 9. Private Properties

- Prefix each private property name with an #
```js
function Point(x, y) {
    this.#x = x;
    this.#y = y;
}
```


- To make a private property readable/writable from any function,it's common to define getters/setters


## 10. Accessing Private Properties

```js
Point.prototype.getX = function () {
    return this.#x;
};
Point.prototype.setX = function (x) {
    this.#x = x;
};
Point.prototype.getY = function () {
    return this.#y;
};
Point.prototype.setY = function (y) {
    this.#y = y;
};


```

## Examples

### module Class initialisation in NodeJS
lib.js
```js
class Schema{
    constructor(name){
        this.name = name
    }
}

module.exports = {
    SampleObj: {
        Schema

    }
}
```

test.js
``js
const lib = require('./lib')
var schema = new lib.SampleObj.Schema('some name')
console.log(schema);
```

---
# 8. [08-UNIT-TESTING](./08-UNIT-TESTING/)

*Why Error Handling is Important?*

+ Error handling empowers the developer
- Differentiates the type and reason of the error
- Logs of the errors are hopeful while bug fixing
- Exceptions are the object-oriented way for errors


## 1. Types of Errors

There are three types of errors in programming:
- Syntax Errors - occur at compile time
Not applicable for JS
- Runtime Errors - occur during execution
After compilation, when the application is running
- Logical Errors - occur when a mistake has been made in thelogic of the script and the expected result is incorrect
Also known as bugs


## 2. Error Handling

+ A function failed to do what its name suggests should:
- Return a special value (e.g. undefined / false / -1)
-  Throw an exception / error
```js
let str = "Hello, SoftUni";
console.log(str.indexOf("Sofia")); // -1
// Special case returns a special value to indicate "not found"
```
+ The fundamental principle of error handling says that a function (method) should either:
- Do what its name suggests
- Indicate a problem
- Any other behavior is incorrect

+ Exception - a function is unable to do its work (fatal error)

```js
let arr = new Array(-1);   // Uncaught RangeError
let bigArr = new Array(9999999999); // RangeError
let index = undefined.indexOf("hi"); // TypeError
console.log(George);   // Uncaught ReferenceError
console.print('hi');   // Uncaught TypeError

```
## 3. Throwing Errors (Exceptions)

- The throw statement lets you create custom errors
- General Error - throw new Error("Invalid state")
- Range Error  - throw new RangeError("Invalid index")
- Type Error - throw new TypeError("String expected")
- Reference Error - throw new ReferenceError("Missing age")
- Good practices say that you should use Error whenthrowing

## 4. Modules

- A set of functions to be included in applications
- Group related behavior
- Resolve naming collisions
- http.get(url) and students.get()
- Expose only public behavior
- They do not populate the global scope with unnecessary objects

## 5. Approaches for Modules

Since, modules were not native in JS, there aredifferent approaches to create modules:
- Using IIFE
- Using Nodejs require/export
- Using ES2015 import/export

## 6. IIFE Modules

- IIFE modules are essential for front-end JS
- They hide the unnecessary and expose only needed behavior/objects to the global scope

```js
(function(scope) {
  const selector = 'loading';  const loadingElement = document.querySelector(selector)  const show = () => loadingElement.style.display = '';  const hide = () => ladingElement.style.display = 'none'  // Only this is visible to the global scope  scope.loading = { show, hide };
  }(window));
```



## 7. Node.js Modules

```js
const http = require('http');
// For NPM packages
const myModule = require('./myModule.js');
// For internal modules
```
- Internal modules need to be exported beforebeing required
- In Node.js each file has its own scope


## 8. Node.js Modules

- Whatever value has module.exports will be the value when using require
```js
const myModule = () => {...};
module.exports = myModule;
```

- To export more than one function, the value of module.exports will be an object
```js
module.exports = {  toCamelCase: convertToCamelCase,  toLowerCase: convertToLowerCase};
```

## 9. ES6 Modules

- Always import and export an object
- Only a specific function can be imported
```js
import toLowerCase from './toLowerCase.js';
```

- To import the whole object
```js
import * as myModules from './myModules.js';
```

- To change the name after importing
```js
import { toLowerCase as convertToLowerCase } from './myModules.js';
```


## 10. Unit Testing
+ The AAA Pattern: Arrange, Act, Assert

- A unit test is a piece of code that checks whether certain functionality works as expected 
- Allows developers to see where & why errors occur

- Testing enables the following:
- Easier maintenance of the code base
- Bugs are found ASAP
- Faster development
- The so called "Test-driven development"
- Tests before code
- Automated way to find code wrongness
- If most of the features have tests, running themshows their correctness

```js
// Arrange all necessary preconditions and inputs
let nums = [2, 15, -2, 4];
// Act on the object or method under test
sortNums(nums);
// Assert that the obtained results are what we expect
if (JSON.stringify(nums) === "[-2,2,4,15]") {
    console.error("They are equal!");
}
```


## 11. Unit Testing Frameworks

+ JS Unit Testing:
Mocha, QUnit, Unit.js, Jasmine 
+ Assertion frameworks (perform checks):
Chai, Assert.js, Should.js
+ Mocking frameworks (mocks and stubs):
Sinon, JMock, Mockito, Moq


## 12. Unit Testing with Mocha and Chai

+ What is Mocha?
Feature-rich JS test framework
Provides common testing functions including it, describe and the main function that runs tests
```js
describe("title", function () {
    it("title", function () { … });
});
```
Usually used together with Chai

+ What is Chai?

```js
let assert = require("chai").assert;
describe("pow", function() {
   it("2 raised to power 3 is 8", function() {
    assert.equal(pow(2, 3), 8);
  });
});
```



## 13. Global Installation

To install frameworks and libraries globally, use the CMD
Installing Mocha and Chai through npm
```
npm install –g mocha
```

```
npm install –g chai
```

Check if Mocha is installed
```
mocha --version
```


## 15. NODE_PATCH Configuration

By default Node.js does not find its globally installed modules
You need to set the NODE_PATH environment variable
```js
rem for any future sessions
setx NODE_PATH %AppData%\npm\node_modules
rem for current session
set NODE_PATH=%AppData%\npm\node_modules

```
You may need to restart your IDE after changing NODE_PATH

## 16. Examples

To load a library, we need to require it
```js
const expect = require("chai").expect;
describe("Test group #1", function () {
    it("should… when…", function () {
        expect(actual).to.be.equal(expected);
    });
    it("should… when…", function () { … });
});
describe("Test group #2", function () {
    it("should… when…", function () {
        expect(actual).to.be.equal(expected);
    });
});

```
## 17. Unit Testing Approaches

- "Code First" (code and test) approach
Classical approach
- "Test First" approach
Test-driven development (TDD)

**Why TDD?**

- TDD helps find design issues early
- Avoids reworking
- Writing code to satisfy a test isa focused activity
- Less chance of error
- Tests will be more comprehensivethan if they are written after the code


---
# 9. [09-RegExp](./09-RegExp/)
# 10. [10-EXAMS](./10-EXAMS/)
