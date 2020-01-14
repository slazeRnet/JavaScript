function gcd(a, b){
let divisor;
let result = 1;
if(a >= b){
    divisor = b;
}
else{
    divisor = a;
}

for (let number = divisor; number >= 1; number--) {
    let divisionA = a / number;
    let divisionB = b / number;
    if(divisionA % 1 == 0 && divisionB % 1 == 0) {

        result = number;
        break;
    }
}
console.log(result);
}

gcd(15, 5);
gcd(2154, 458);
