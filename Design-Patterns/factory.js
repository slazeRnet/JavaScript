
//FACTORY DESIGN PATTERN
function Developer(name){
    this.name = name;
    this.type = "Developer";
}

function Tester(name){
    this.name = name;
    this.type = "Tester";
}

function EmployerFactory(){
    this.create = (name, type) => {
        switch(type){
            case 1: 
            return new Developer(name);
            break;
            case 2: 
            return new Tester(name);
            break;
        }
    }
}

function say(){
console.log(`Hi i am ${this.name} and I am a ${this.type}.`);
}

const employeeFactory = new EmployerFactory();
const employees = [];

employees.push(employeeFactory.create("Patrick", 1));
employees.push(employeeFactory.create("Adam", 2));

employees.forEach(emp => {
    say.call(emp)
})

/*
result: 

Hi i am Patrick and I am a Developer.
Hi i am Adam and I am a Tester.
*/