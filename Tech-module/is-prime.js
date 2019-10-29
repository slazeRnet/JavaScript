function isprime(input){
    let num = Number(input.shift());

    if(num / 2 == (num / 2).toFixed() && num != 2){
        return false;
    }
    if(num / 3 == (num/3).toFixed() && num != 3){
        return false;
    }
    if(num / 5 == (num / 5).toFixed() && num != 5){
        return false;
    }
    return true;
}

console.log(isprime(["2"]));
console.log(isprime(["7"]));
console.log(isprime(["15"]));
console.log(isprime(["19"]));
console.log(isprime(["94"]));
console.log(isprime(["89"]));
