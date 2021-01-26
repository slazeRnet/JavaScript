function sum (c, d){
    
    return c + d;
}

let result = sum([1, 2]);

console.log(result); // 1,2undefined

function add(c, d) {
    return this.a + this.b + c + d;
  }
  
  var o = {a: 1, b: 3};
  
  // The first parameter is the object to use as
  // 'this', subsequent parameters are passed as
  // arguments in the function call
  let outputOne = add.call(o, 5, 7); // 16
  console.log(outputOne);
  // The first parameter is the object to use as
  // 'this', the second is an array whose
  // members are used as the arguments in the function call
  let outputTwo = add.apply(o, [10, 20]); // 34
  console.log(outputTwo);
