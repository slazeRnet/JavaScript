let stringObjectTypeOf = typeof new String('2 + 2') //

let stringTypeOf = typeof '2 + 2'

console.log('====================================');
console.log(stringObjectTypeOf); // object
console.log('====================================');
console.log('====================================');
console.log(stringTypeOf); // string
console.log('====================================');

let str1 = new String('dog');
let str2 = new String('dog');

let strComparisonResult = str1 == str2
console.log('====================================');
console.log(strComparisonResult);
console.log('====================================');