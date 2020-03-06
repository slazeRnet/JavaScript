class Vehicle{

    constructor(make, year){
        this.make = make,
        this.year = year
    }
    stopEngine(){
        return 'engine on halt';
    }

    printVehicleDetails(){
        return `make : ${this.make} - year : ${this.year}`;
    }

    toString(){
        return `this is parent toString`;
    }
}

class Car{

    constructor(numOfTires, licenseNumber, color){
        this.numOfTires = numOfTires,
        this.licenseNumber = licenseNumber,
        this.color = color

    }


    toString(){


        return `${this.numOfTires} - ${this.licenseNumber} - ${this.color}`;
    }

    startEngine(){
        return 'starting the engine...';
    }
}


let myCar = new Car(4, 'C 9012', 'red');

let vehicleinstance = new Vehicle('BMW', 2020);
myCar.__proto__ = new Vehicle('BMW', 2020);
//myCar.__proto__ = new Vehicle('BMW', 2020).__proto__; this will hide the public properties from Vehicle

console.log(myCar.stopEngine()); // engine on halt
console.log(myCar.__proto__); // Vehicle { make: 'BMW', year: 2020 }
console.log(myCar.printVehicleDetails()); //make : BMW - year : 2020


// console.log(Vehicle);
// console.log(Vehicle.prototype);
// console.log(Vehicle.__proto__);
// console.log(Car);
// console.log(Car.prototype);
// console.log(Car.__proto__);
// console.log(myCar.__proto__.toString());
// console.log(myCar.toString());
// console.log(Object.getPrototypeOf(Vehicle));
// console.log();

