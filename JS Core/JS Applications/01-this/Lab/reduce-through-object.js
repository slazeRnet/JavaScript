let arr = [{user:'a', salary:500},{user:'b', salary:900}, {user:'c', salary:6000}];

let result = arr.reduce(function (a, b) {
    return{salary: a.salary + b.salary }; // returns object with property x
  });

  console.log(result);
  
