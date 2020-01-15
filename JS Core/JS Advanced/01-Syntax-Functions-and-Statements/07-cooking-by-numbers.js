// chop - divide the number by two
// dice - square root of number
// spice - add 1 to number
// bake - multiply number by 3
// fillet - subtract 20% from number
function cooking(arg){
let initialNumber = parseInt(arg[0]);

for (let index = 1; index < arg.length; index++) {
    if(arg[index] == 'chop'){
        initialNumber /= 2;
        console.log(initialNumber);
        
    }
    else if(arg[index] == 'dice'){
        initialNumber = Math.sqrt(initialNumber);
        console.log(initialNumber);
        
    }
    else if(arg[index] == 'spice'){
        initialNumber += 1;
        console.log(initialNumber);
        
    }
    else if(arg[index] == 'bake'){
        initialNumber *= 3;
        console.log(initialNumber);
        
    }
    else if(arg[index] == 'fillet'){
        initialNumber -= initialNumber * 0.2;
        console.log(initialNumber);
        
    }
}
}

cooking(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
