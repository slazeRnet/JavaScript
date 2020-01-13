let person = {
    name : 'Ivan',
    score : 5,
    age : 17,
    address : 'Sofia, Tsarigradsko shose 11',
    sayYourName: function() {
        console.log('Hello my name is ' + this.name);
        
    }

};

let keys = Object.keys(person);

console.log(keys); //[ 'name', 'score', 'age', 'address', 'sayYourName' ]

