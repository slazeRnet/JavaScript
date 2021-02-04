let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };
  
  setTimeout(() => user.sayHi(), 1000);  // Another user in setTimeout!
  
  // ...the value of user changes within 1 second
  user = {
    sayHi() { console.log("Another user in setTimeout!"); }
  };
  
