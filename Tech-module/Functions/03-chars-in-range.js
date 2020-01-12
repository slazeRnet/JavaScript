function charsInRange(a, b){
let aInt = a.charCodeAt(0);
let bInt = b.charCodeAt(0);

if(aInt <= bInt){
    fromAtoB(aInt, bInt);
}

else if(aInt > bInt){
    fromBtoA(aInt, bInt);
}
function fromAtoB(aInt, bInt){
    let chars = new Array;
    for (let counter = aInt + 1; counter < bInt; counter++) {
        chars.push(String.fromCharCode(counter));
        
    }

    console.log(chars.join(' '));
}

function fromBtoA(aInt, bInt){
    let chars = new Array;
    for (let counter = bInt + 1; counter < aInt; counter++) {
        chars.push(String.fromCharCode(counter));
        
    }

    console.log(chars.join(' '));
}
}
