let person = {
    name : 'Ivan',
    score : 5,
    age : 17,
    address : 'Sofia, Tsarigradsko shose 11',
    sayYourName: function() {
        console.log('Hello my name is ' + this.name);
        
    }

};

let values = Object.values(person);

console.log(values); //
values[4](); // Hello my name is Ivan' 
// [
//     'Ivan',
//     5,
//     17,
//     'Sofia, Tsarigradsko shose 11',
//     [Function: sayYourName]
//   ]
