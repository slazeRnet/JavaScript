let totalPriceRegex = new RegExp(/.*?(\d{1,}\.\d{2})/);

let str1 = 'Available: 1';
let str2 = 'TotalPrice: 2.00';

console.log(str1.match(totalPriceRegex));
console.log(totalPriceRegex.exec(str1));
console.log(totalPriceRegex.exec(str2)[1]);
