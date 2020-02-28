let obj = [
    {name: "Peter", age:35},
    {age:2},
    {name: "Steven"},
    {height: 180}
];

const concatanate = (a, o) => ( {...a, ...o});

const c = obj.reduce(concatanate, {}); //{ name: 'Steven', age: 2, height: 180 }


console.log(c);

// OVERWRITEING THE PROPERTIES OF OBJECTS BY CONCATANATION

let {...a} = obj;
console.log(a);

