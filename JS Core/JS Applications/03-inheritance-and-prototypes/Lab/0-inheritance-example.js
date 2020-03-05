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
