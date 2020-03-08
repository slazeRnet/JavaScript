let pattern  = RegExp(/(^([\s\n]*|[^0-9\\<>&'"]*)$)/);

let text = '';
let text1 = 'appdata';
let text2 = 's';

console.log(pattern.test(text));
console.log(pattern.test(text1));
console.log(pattern.test(text2));
