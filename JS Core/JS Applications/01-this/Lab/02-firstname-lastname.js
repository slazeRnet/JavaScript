// class Person{

//     constructor(firstName, lastName){
//         this.firstName = new String(firstName);
//         this.lastName= new String(lastName);
//         this.fullName = (fullName) =>{
//             if(fullName){
//                 this.firstName = fullName.split(' ')[0];
//                 this.lastName = fullName.split(' ')[1];
    
//             }
//             return `${this.firstName} ${this.lastName}`;
//         }
//     }

// }

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    Object.defineProperty(this, 'fullName',{
        set: function(value){
            this.firstName = value.split(' ')[0];
            this.lastName = value.split(' ')[1];
        },
        get: function(){
           return `${this.firstName} ${this.lastName}`;
        }
    });

    return{firstName, lastName, fullName};
}


let person = Person("Peter", "Ivanov");
console.log(person.fullName);//Peter Ivanov
console.log(Object.getOwnPropertyNames(person)); //[ 'firstName', 'lastName', 'fullName' ]
person.firstName = "George";
console.log(person.fullName);//George Ivanov
person.lastName = "Peterson";
console.log(person.fullName);//George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName)//Nikola
console.log(person.lastName)//Tesla
