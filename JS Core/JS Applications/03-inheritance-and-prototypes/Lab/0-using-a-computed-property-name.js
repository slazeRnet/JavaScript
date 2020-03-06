const expr = 'foo';

const obj = {
  get [expr]() { return 'bar'; }
};

console.log(obj.foo); // "bar"