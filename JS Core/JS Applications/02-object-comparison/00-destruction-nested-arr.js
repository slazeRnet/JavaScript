//OBJECT DESTRUCTION EXAMPLE 1
let arrLetters = ['A', 'B', 'C', 'D', 'E'];

let [char1, char2] = arrLetters;
let [,,,, last]  = arrLetters;
let [,,, ...lastTwo] = arrLetters;

console.log(char1); //A
console.log(char2); //B
console.log(last); //E
console.log(lastTwo); //['D', 'E']
//JOIN TWO ARRAYS TOGETHER
let nums = [1, 2, 3, 4, 5, 6, 7, 8];

let joined = [...nums, ...arrLetters]; // [1, 2, 3, 4, 5, 6, 7, 8, 'A', 'B', 'C', 'D', 'E']

console.log(joined);
//SETTING DEFAULT VALUES TO AN DESTRUCTOR
function mathOperation(a, b){
    return[a+b, a*b, a/b]; // if index 2 is empty is going to return the default value below :
}

let [sum, mul, div = 'No division'] = mathOperation(5, 6);
console.log(sum); //11
console.log(mul); //40
console.log(div); //0.8333333333333334


//OBJECT DESTRUCTION EXAMPLE 2 FUNCTIN THAT ACCEPTS OBJ AS PARAM
let sampleFunc = ({name}) => {
    console.log(name);
    
};

let sampleObj = {
    name: 'Foo',
    mail: 'a@a.com',
    date: '01-01-2020'
}

sampleFunc(sampleObj); // Foo
// DEFENING OUR OWN VAR FOR OBJECT DESTRUCTION

let sampleObj1 = {
    name:'Sally',
    age: 33,
    address: {
        str: 'str. Ivan Vazaov 15',
        town: 'Sofia'
    }
}

let {name:firstName, age, favoriteFood = 'No favorite food', address: {str}} = sampleObj1;

console.log(firstName); //Sally
console.log(age); //33
console.log(favoriteFood); //No favorite food
console.log(str); //str. Ivan Vazaov 15


//OBJECT DESTRUCTION EXAMPLE 2 FUNCTIN THAT ACCEPTS OBJ AS PARAM
let department = [['Accounting', ['secretary', 'accountant']], ['Enginering', ['UI designer', 'back-end']]];

const [, [dep2, [positions2]]] = department;

 console.log(dep2); //Enginering
 console.log(positions2); //UI designer
 console.log(positions2);
 