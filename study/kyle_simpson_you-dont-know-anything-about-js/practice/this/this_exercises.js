/**
 * GUESS THE OUTPUT WITHOUT WATCHING THE ANSWEARS DISPLAYED ON THE BOTTOM
 */
// Exercise 1
function f() {
    console.log( this ); // returns the global{}
  }
  
  let user = {
    g: f.bind(null)
  };
  
  user.g() //null







