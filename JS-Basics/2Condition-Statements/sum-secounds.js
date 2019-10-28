function SumSecounds(input){
    let minutes = 0;
    let secounds = 0;
    while(input.length != 0)
    {
        let number = Number(input.shift());
        if(number > 59){
            let minutesCalculation = number / 60;
            minutes += minutesCalculation.toFixed();
            secounds += number % 60;
        }
        else{
            secounds += number % 60;
            if(secounds > 59)
            {
                minutes += 1;
                secounds = secounds - 60;
            }
        }
        if(secounds == 60) secounds = 0;    
    }
    console.log(`${minutes}:${secounds.toString().padStart(2, '0')}`);
}

SumSecounds(["35", "45", "44"]); // 2:04
