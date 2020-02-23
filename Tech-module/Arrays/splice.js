let months = ['January', 'February', 'March', 'April', 'May'];

//remove secound

months.splice(1, 1);

console.log(months); // [ 'January', 'March', 'April', 'May' ]

//add february again

console.log(months.splice(1, 0, 'February')); // []

console.log(months); //[ 'January', 'February', 'March', 'April', 'May' ]


