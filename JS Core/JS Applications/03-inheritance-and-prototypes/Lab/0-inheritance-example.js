class Vehicle{

    constructor(numOfTires, licenseNumber, color){
        this.numOfTires = numOfTires,
        this.licenseNumber = licenseNumber,
        this.color = color
    }

    toString(){
        return `this is parent toString`;
    }
}

class Car extends Vehicle{

    constructor(numOfTires, licenseNumber, color){

        super(numOfTires, licenseNumber, color);

    }

    //METHOD SHADOWING OF toString()

    toString(){

        let parentToString = super.toString(); // this is parent toString

        return `${this.licenseNumber} - ${this.color} ` + parentToString;
    }

    startEngine(){
        return 'starting the engine...';
    }
}


let myCar = new Car(4, 'C 9012', 'red');

//  PROTO IS REFERING TO THE CLASS PROTOTYPE
let isProtoReferingToPrototype = (myCar.__proto__ === Car.prototype);

console.log(isProtoReferingToPrototype); // true

// OVERRIDING METHODS FROM THE PROTOTYPE
console.log('__________________');

let anotherCar = new Car(4, 'C 9012', 'red');

myCar.startEngine = () =>{
    return 'i just hacked this method from the instance';
}
console.log(myCar.startEngine()); //i just hacked this method from the instance

console.log(anotherCar.startEngine()); //starting the engine...

Car.prototype.startEngine = () =>{
    return 'i just hacked this method from the prototype';
}
console.log(myCar.startEngine()); //i just hacked this method from the instance

console.log(anotherCar.startEngine()); //i just hacked this method from the prototype

console.log(myCar.__proto__.startEngine()); //i just hacked this method from the prototype




