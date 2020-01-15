function walk(numberOfSteps, footprintLength, speed){
let timeTraveled = [0, 0, 0];

let distanceM = numberOfSteps * footprintLength;
let speedM = speed * 1000;
let timeWalked = distanceM / speedM;

appendTime(timeWalked);
rest(distanceM);

let h = timeTraveled[0].toString();
let m = timeTraveled[1].toString();
let s = timeTraveled[2].toString();

console.log(`${h.padStart(2, '0')}:${m.padStart(2, '0')}:${s.padStart(2, '0')}`);

function appendTime(input){
    let hours = Math.floor(input); // 0
    let minutesAndSecounds = (input % 1) * 60; // 28.799
    let minutes = Math.floor(minutesAndSecounds); // 28
    let secounds = Math.round(( minutesAndSecounds % 1 ) * 60); // 47.9999
  
    timeTraveled[0] += hours;
    timeTraveled[1] += minutes;
    timeTraveled[2] += secounds;
}

function rest(distance){
    let nTimesRested = Math.floor(distance / 500);
    let rest = nTimesRested / 60;

    appendTime(rest);
    
}
}


// numberOfSteps, footprintLength, speedKmH => hours:min:sec
walk(4000, 0.60, 5); // 00:32:48
walk(2564, 0.70, 5.5); // 00:22:35
