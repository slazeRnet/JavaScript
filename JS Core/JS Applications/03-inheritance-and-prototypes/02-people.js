function solve(){
      
    class Employee{

        constructor(name, age){

            if(new.target === Employee){
                throw new Error('Canot instantiate directly.');
            }

            this.age = age;
            this.name = name;
            this.salary = 0;
            this.tasks = [];
            this.currentIndex = 0;
        }

        work(){
            let output = this.tasks.shift();

            console.log(this.name + output);

            this.tasks.push(output);
        }

        collectSalary(){

            let salaryTotal = this.salary;
            console.log(`${this.name} received ${salaryTotal} this month.`);
        }
    }

    class Junior extends Employee{

        constructor(name, age){

            super(name, age);
            this.tasks.push(' is working on a simple task.');
        }
    }

    class Senior extends Employee{

        constructor(name, age){

            super(name, age);
            this.tasks.push(' is working on a complicated task.');
            this.tasks.push(' is taking time off work.');
            this.tasks.push(' is supervising junior workers.');
        }
    }

    class Manager extends Employee{

        constructor(name, age){
            
            super(name, age);

            this.dividend = 0;
            this.tasks.push(' scheduled a meeting.');
            this.tasks.push(' is preparing a quarterly report.');

        }

        collectSalary(){

            let salaryTotal = this.salary + this.dividend;
            console.log(`${this.name} received ${salaryTotal} this month.`);

        }
    }

    
    return { Employee, Junior, Senior, Manager};
    
}

let result = solve();

var guy1 = new result.Junior('dragan', 23);
var guy1parent = Object.getPrototypeOf(Object.getPrototypeOf(guy1));
var guy2 = new result.Senior('petkan', 24);
var guy2parent = Object.getPrototypeOf(Object.getPrototypeOf(guy2));
var guy3 = new result.Manager('bojan', 25);
var guy3parent = Object.getPrototypeOf(Object.getPrototypeOf(guy3));

guy1.salary = 1000;
guy1.collectSalary();

guy2.salary = 2000;
guy2.collectSalary();

guy3.salary = 3000;
guy3.collectSalary();

guy3.dividend = 500;
guy3.collectSalary();