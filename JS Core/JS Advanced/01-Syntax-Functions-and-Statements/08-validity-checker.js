function checkIfValid(arg){
let x1 = parseInt(arg[0]);
let y1 = parseInt(arg[1]);
let x2 = parseInt(arg[2]);
let y2 = parseInt(arg[3]);

calculateDistance(x1, y1, 0, 0);
calculateDistance(x2, y2, 0, 0);
calculateDistance(x1, y1, x2, y2);

function calculateDistance(x1, y1, x2, y2){
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    if(distance % 1 == 0){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        
    }  
    else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);

    }
}
}
// {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}. 

checkIfValid([3, 0, 0, 4]);
checkIfValid([2, 1, 1, 1]);
