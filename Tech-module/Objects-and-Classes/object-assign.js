let person = {
    name : 'Ivan',
    score : 5,
    age : 17,
    address : 'Sofia, Tsarigradsko shose 11',
    sayYourName: function() {
        console.log('Hello my name is ' + this.name);
        
    }

};

let secoundPerson = Object.assign({name: 'Hristo'}, person, {name: 'Peter'})

console.log(person.name + ' - ' + person.score); // Ivan - 5
person.sayYourName(); //  no need for console.log

console.log(secoundPerson);
// {
//     name: 'Peter',
//     score: 5,
//     age: 17,
//     address: 'Sofia, Tsarigradsko shose 11',
//     sayYourName: [Function: sayYourName]
//   }
