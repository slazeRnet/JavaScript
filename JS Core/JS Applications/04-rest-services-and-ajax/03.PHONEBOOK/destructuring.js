let key = 'z';
let {[key]: foo} = {z: 'bar'};

console.log(foo); // "bar"
console.log(key);
