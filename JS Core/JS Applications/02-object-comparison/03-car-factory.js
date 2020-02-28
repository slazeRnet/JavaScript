function createCar({model, power, color, carriage, wheelsize}){

    let engine = {power: setEngineVolume(power)[0], volume: setEngineVolume(power)[1]};
    let wheels = setWheels(wheelsize);
    let obj = {
        model,
        engine,
        carriage: {
            type: carriage,
            color
        },
        wheels
    }

    return obj;

    function setEngineVolume(horsePower){
        if(horsePower <= 90){
            return [90, 1800];
        }
        else if(horsePower <= 120){
            return [120, 2400];
        }
        else{
            return [200, 3500];
        }
    }

    function setWheels(diameter){
        while(diameter % 2 == 0){
            diameter--;
        }
        return [diameter, diameter, diameter, diameter];
    }
}

console.log(createCar(
    { model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));

console.log(createCar(
    { model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }));