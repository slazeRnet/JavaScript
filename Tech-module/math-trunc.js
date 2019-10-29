function exactTime(input){
    let centuries = Number(input.shift());
    let years = centuries * 100;
    let days = Math.trunc(years * 365.2422 ); // 36524
    let daysWithoutTrunc = (years * 365.2422 );// 36524.22
    let hours = 24 * days;
    let minutes = 60 * hours;

    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
    
}

exactTime([1]);
