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
**1. What is an Array?**
**1. What is an Array?**
**1. What is an Array?**
**1. What is an Array?**
**1. What is an Array?**
**1. What is an Array?**
**1. What is an Array?**

# 3. [03-Objects](./03-Objects/)
# 4. [04-Functions](./04-Functions/)
# 5. [05-DOM](./05-DOM/)
# 6. [06-DOM-MANIPULATIONS](./06-DOM-MANIPULATIONS/)
# 7. [07-CLASSES](./07-CLASSES/)
# 8. [08-UNIT-TESTING](./08-UNIT-TESTING/)
# 9. [09-RegExp](./09-RegExp/)
# 10. [10-EXAMS](./10-EXAMS/)
