//function-expression-vs-declaration

add(1, 3); // 4

// function declaration is during compile time
function add(a, b){
    console.log(a + b);
    
}

// function expression is after compilation

add2(1, 3); // reference exception
var add2 = function(a, b){
    console.log(a + b);
    
}


