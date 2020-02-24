var myString = "hey 0.15 Available: 00.00";
let regex = new RegExp(/(\d{1,})\.(\d{2})/g); // g means the regex remembers the lastindex
let regex2 = new RegExp(/(\d{1,})\.(\d{2})/); // exec allways starts in the begining if not global
//console.log(myString.match(/(\d{1,})\.(\d{2})/)); 
// [ '0.15', '0', '15', index: 4, input: 'hey 0.15 Available: 00.00', groups: undefine ]
//console.log(myString.match(/\d+/g));
//[ '0', '15', '00', '00' ]

console.log('match ->' + myString.match(regex)); //match ->0.15,00.00
console.log('match ->' + myString.match(regex2)); // match ->0.15,0,15

//exec is better to be used with capturing groups
console.log(regex.exec(myString)); // [1]: 0, [2]: 15
regex.lastIndex = 0; // after each loop with regex the lastIndex can be set to 0 otherwise on next itteration will return null
console.log(regex.exec(myString)); // [1]: 00, [2]: 00

console.log(regex2.exec(myString)); // [1]: 0, [2]: 15
console.log(regex2.exec(myString)); // [1]: 0, [2]: 15

console.log(regex.test(myString)); // false
console.log(regex2.test(myString)); // true
