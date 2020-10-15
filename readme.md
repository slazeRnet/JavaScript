### CONTENT
### [1. Overview](#1-overview-1)
### [2. Definitions](#1-definitions-1)
### [11. Errors](#11-errors-1)

---
# 1. Overview
- stable API - API stability refers to some level of guarantee from a project that its API will only change in defined ways in the future, or will not change at all.

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
