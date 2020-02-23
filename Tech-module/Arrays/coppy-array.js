let months = ['January', 'February', 'March', 'April', 'May'];

let newArray = months.slice();

newArray.pop();

console.log(newArray); //[ 'January', 'February', 'March', 'April' ]

console.log(Object.keys(newArray)); // returns the indexes (keys) [ '0', '1', '2', '3' ]


