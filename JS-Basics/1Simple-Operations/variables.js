var a = 1;
let b = 1;
let c = {
    name: 'Mandy',
    age: 45
};
d = 2;

 delete a; // doesnt work
 delete b;  // doesnt work
 delete c.age; //  works
 //delete d; works

 console.log(a); // 1
 console.log(b); // 1
 console.log(c); //{ name: 'Mandy' }
 delete c; // doesnt work
 console.log(c); //{ name: 'Mandy' }
 delete c.name; // name prop deleted 
 console.log(c); //{ }
 console.log(c.name); // undefined
 console.log(d); // 2
 
 function func1(){
     let sampleLet = 'let';
     var sampleVar = 'var';
 }

 //console.log(sampleLet); //sampleLet is not defined
 //console.log(sampleVar); //sampleVar is not defined
 function varTest() {
    var x = 1;
    {
      var x = 2;  // same variable!
      console.log(x);  // 2
    }
    console.log(x);  // 2
  }

 function letTest() {
    let x = 1;
    {
      let x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }
 
  var x = 'global';
let y = 'global';
console.log('x : ' + this.x); // undefined
console.log('x : ' + x); // 'global'
console.log('y : ' + this.y); // undefined
console.log('y : ' + y); // 'global'
 