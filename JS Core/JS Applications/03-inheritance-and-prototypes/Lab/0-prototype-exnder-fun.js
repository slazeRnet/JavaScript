class CoffeMachine{

    constructor(name, workingHours, company){
        this.name = name,
        this.workingHours = workingHours;
        this.company = company;

    }

}

function addFunctionality(obj){

    function addTotalWorkingHours(obj){

        obj.__proto__.totalWokingHours = () => {

            result = Math.abs(obj.workingHours[1] - obj.workingHours[0]);
            return result;
       // return obj.name;
         }

        return obj;
    }

    obj = addTotalWorkingHours(obj);

    return obj;
}

let machine1 = new CoffeMachine('nescafe', [9, 18], 'Nescafe Ltd.');

machine1 = addFunctionality(machine1);

console.log(machine1);
// CoffeMachine {
//     name: 'nescafe',
//     workingHours: [ 9, 18 ],
//     company: 'Nescafe Ltd.'
//   }
console.log(machine1.totalWokingHours()); // 9
console.log(machine1.__proto__); //CoffeMachine { totalWokingHours: [Function] }
