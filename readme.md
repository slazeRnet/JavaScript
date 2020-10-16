### CONTENT
### [1. Overview](#1-overview-1)
### [2. Definitions](#1-definitions-1)
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
### 3.1.2. Lack of Identification (null)
- The value null is written with a literal: null. null is not an identifier for a property of the global object, like undefined can be. Instead, null expresses a lack of identification, indicating that a variable points to no object. In APIs, null is often retrieved in a place where an object can be expected but no object is relevant. 
<details>
    <summary>Code Example</summary>
    ```js
  // foo does not exist. It is not defined and has never been initialized:
foo; //ReferenceError: foo is not defined
  ```
  ```js
// foo is known to exist now but it has no type or value:
var foo = null; 
foo; //null
  ```
</details>

<details>
    <summary>Comparison Operator Code Example</summary>
  ```js
typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null == null         // true
!null                // true
isNaN(1 + null)      // false
  ```
</details>

isNaN(1 + undefined) // true
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
