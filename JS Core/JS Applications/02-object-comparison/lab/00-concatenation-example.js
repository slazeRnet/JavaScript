let obj = [
    {name: "Peter", age:35},
    {age:2},
    {name: "Steven"},
    {height: 180}
];

// OVERRRITEING THE PROPERTIES OF OBJECTS BY CONCATANATION
const concatanate = (a, o) => ( {...a, ...o});

const c = obj.reduce(concatanate, {}); //{ name: 'Steven', age: 2, height: 180 }


console.log(c);

// USING Object.assign

let obj1 = {
    name: "Maya",
    age: 15,
    assign: function(o){
        Object.assign(this, o);
    }
}

let objToAssign = {
    email: 'user@web.com'
}
obj1.assign(objToAssign);
console.log(obj1);
// {
//     name: 'Maya',
//     age: 15,
//     assign: [Function: assign],
//     email: 'user@web.com'
//   }
