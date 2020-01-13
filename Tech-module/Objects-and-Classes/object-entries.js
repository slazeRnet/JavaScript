let person = {
    name : 'Ivan',
    score : 5,
    age : 17,
    address : 'Sofia, Tsarigradsko shose 11',
    sayYourName: function() {
        console.log('Hello my name is ' + this.name);
        
    }

};

let entries = Object.entries(person);// 2D array from var name - value

console.log(entries); 
// [
//     [ 'name', 'Ivan' ],
//     [ 'score', 5 ],
//     [ 'age', 17 ],
//     [ 'address', 'Sofia, Tsarigradsko shose 11' ],
//     [ 'sayYourName', [Function: sayYourName] ]
//   ]
