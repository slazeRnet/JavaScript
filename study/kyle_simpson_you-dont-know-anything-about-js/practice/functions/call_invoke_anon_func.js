/**
 Using call to invoke an anonymous function
 In this example, we create an anonymous function and use call to invoke it on every object in an array.
 
 The main purpose of the anonymous function here is to add a print function to every object, which is able to print the correct index of the object in the array.
 */



const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
  ];

  let print = function () {
    console.log(this);
  }

  print.call(this, animals)

