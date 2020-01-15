function speeding(arg){
    let speed = parseInt(arg[0]);
    let area = arg[1];

    if(area == 'motorway'){
        if(speed > 130 ){
            let overLimit = speed - 130;
            speedExceedingMessage(overLimit);
        }
    }
    else if(area == 'interstate'){
        if(speed > 90 ){
            let overLimit = speed - 90;
            speedExceedingMessage(overLimit);
        }
    }
    else if(area == 'city'){
        if(speed > 50 ){
            let overLimit = speed - 50;
            speedExceedingMessage(overLimit);
        }
    }
    else if(area == 'residential'){
        if(speed > 20 ){
            let overLimit = speed - 20;
            speedExceedingMessage(overLimit);
        }
    }
    function speedExceedingMessage(speedOverlimit){
        if(speedOverlimit <= 20){
            console.log('speeding');
            
        }
        else if(speedOverlimit <= 40){
            console.log('excessive speeding');
        }
        else{
            console.log('reckless driving');
            
        }
        
    }
}

speeding([21, 'residential']); // speeding
speeding([200, 'motorway']); // reckless driving
speeding([40, 'city']);
