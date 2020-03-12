let reg = new RegExp(/(a)?b(?(1)c|d)/gm);

let text1 = 'abc';
let text2 = 'a bc';
let text3 = 'cba';

let result1 = reg.match(text1);
let result2 = reg.match(text2);
let result3 = reg.match(text3);

console.log(result1);
console.log(result2);
console.log(result3);
