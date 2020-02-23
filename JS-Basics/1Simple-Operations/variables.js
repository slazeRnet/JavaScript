var a = 1;
let b = 1;
let c = {
    name: 'Mandy',
    age: 45
};
d = 2;

 delete a;
 delete b;
 delete c.age;
 delete d;

 console.log(a); // 1
 console.log(b); // 1
 console.log(c); //{ name: 'Mandy' }
 delete c;
 console.log(c); //{ name: 'Mandy' }
 console.log(d); //error
 
 