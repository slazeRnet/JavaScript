//curring function in JS
function trippleSum(a){
    return function(b){
        return function(c){
            return a + b + c;
        };
    };
}
let first = trippleSum(5);
let secound = first(10);
let third = secound(20);

console.log(third); // 35
