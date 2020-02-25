// class Person{

//     constructor(firstName, lastName){
//         this.firstName = new String(firstName);
//         this.lastName= new String(lastName);
//         this.fullName = new String(`${this.firstName} ${this.lastName}`);
//     }

//     // set fullName(fullName){
//     //     this.firstName = this.fullName.split(' ')[0];
//     //     this.lastName = this.fullName.split(' ')[1];
//     // }
// }

let person1 = {
    firstName: "Peter",
    lastName: "Ivanov",
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    },

    whatIsThis: function(){ return this}

}

person1.firstName = "George";
console.log(person1.fullName());//George Ivanov
console.log(person1.firstName);//George Ivanov
console.log(person1.lastName);//George Ivanov

let person = new Person("Peter", "Ivanov");
console.log(person.fullName);//Peter Ivanov
person.firstName = "George";
console.log(person.fullName);//George Ivanov
person.lastName = "Peterson";
console.log(person.fullName);//George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName)//Nikola
console.log(person.lastName)//Tesla
