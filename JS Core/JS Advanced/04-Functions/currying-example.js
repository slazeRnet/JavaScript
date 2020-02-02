//curring function in JS
function trippleSum(a){
    return function(b){
        return function(c){
            return a + b + c;
        };
    };
}

console.log(trippleSum(1)(2)(3)); // 6
