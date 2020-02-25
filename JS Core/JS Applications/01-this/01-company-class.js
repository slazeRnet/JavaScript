class Company{
    constructor(){
        this.departments = [];
    }

    addEmployee(username, Salary, Position, Department){
        if(!username | (!Salary && Salary == 0 ) | !Position | !Department){ // 
            throw new Error('Invalid input!');
        } 
    
        if(Salary < 0){
             throw new Error(" Invalid input!");
        }

        let user = {

            username, 
            salary: Salary,
            position: Position,

        }

        if(!this.departments[Department]){
           this.departments[Department] = [];
         }

            this.departments[Department].push(user);


        return `New employee is hired. Name: ${username}. Position: ${Position}`;
    }

    getHighestAvgSalaryDepartment(){
        let deparmentsByTotalSalary = [];
        let bestDepartment; 

        for (const key in this.departments) {
            
                let total = this.departments[key].reduce((a, b) =>{

                    return {salary: a.salary + b.salary};
                });

                let divider =  this.departments[key].length;
                let salary = (total.salary / divider).toFixed(2);
                
                deparmentsByTotalSalary.push({key, salary});
        }

        bestDepartment = deparmentsByTotalSalary.sort((a, b) =>{

            return b.salary - a.salary;
        })[0];

        return bestDepartment;
    }

    bestDepartment(){
        let bestDepartment = this.getHighestAvgSalaryDepartment();
        let result = `Best Department is: ${bestDepartment.key}\n`;
        result += `Average salary: ${bestDepartment.salary}\n`

        this.departments[bestDepartment.key].sort(order).forEach(e => {
            result += `${e.username} ${e.salary} ${e.position}\n`;
        });

        function order(a, b){
            if (a.salary < b.salary) {
                return 1;
            } else if (a.salary > b.salary) { 
                return -1;
            }

            if (a.name < b.name) {
                return 1;
            } else if (a.name > b.name) { 
                return -1;
            }

            return 0;
        }
        return result.trim();
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.departments["Construction"]);

console.log(c.bestDepartment());



