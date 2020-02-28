const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction();
  person.printIntroduction();
// My name is Matthew. Am I human? true
// My name is undefined. Am I human? false