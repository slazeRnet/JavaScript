// console.log(functionExpression1var(1, 1)); // error (not defined)
// console.log(functionExpression1let(1, 1));  // error (not defined)
console.log(functionDeclaration(1, 1));  // 2


var functionExpression1var = (a, b) => {return a + b};
var functionExpression1let = (a, b) => {return a + b};

function functionDeclaration(a, b){
    return a + b;
}