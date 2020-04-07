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


# 2. [02-Arrays](./02-Arrays/)
# 3. [03-Objects](./03-Objects/)
# 4. [04-Functions](./04-Functions/)
# 5. [05-DOM](./05-DOM/)
# 6. [06-DOM-MANIPULATIONS](./06-DOM-MANIPULATIONS/)
# 7. [07-CLASSES](./07-CLASSES/)
# 8. [08-UNIT-TESTING](./08-UNIT-TESTING/)
# 9. [09-RegExp](./09-RegExp/)
# 10. [10-EXAMS](./10-EXAMS/)
