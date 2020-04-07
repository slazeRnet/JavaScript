class Computer {
    // TODO: Write the missing logic by the descriptions in the document.
    constructor(ramMemory, cpuGHz, hddMemory){
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSpace){
        if(this.hddMemory - requiredSpace < 0){
            throw new Error('There is not enough space on the hard drive');
        }

        let program = {name, requiredSpace};
        this.hddMemory -= requiredSpace;

        this.installedPrograms.push(program);

        return program;
    }

    uninstallAProgram(name){
        if(!this.installedPrograms.some(p => p.name == name)){
            throw new Error('Control panel is not responding');
        }
        else{
            let program = this.installedPrograms.filter(p => p.name == name)[0];
            this.hddMemory -= program.requiredSpace;

            this.installedPrograms = this.installedPrograms.filter(p => {
                return p.name !== name;
            })
            
        }

        return this.installedPrograms;
    }

        openAProgram(name)
        {   
            if(!this.installedPrograms.some(p => p.name == name)){
                throw new Error(`The ${name} is not recognized`)
            }

            if(this.taskManager.some(p => p.name == name)){
                throw new Error(`The ${name} is already open`)
            }

            let program = this.installedPrograms.filter(p => p.name == name)[0];
            let division = program.requiredSpace / this.ramMemory;
            let totalMemory = division * 1.5;

            let ramRequired = totalMemory.toFixed(0) + '%';

            let divisionCpu = (program.requiredSpace / this.cpuGHz) / 500;
            let totalCpu = divisionCpu * 1.5;
            let cpuRequired = totalCpu.toFixed(0) + '%';

              if(ramRequired >= 100){
                  throw new Error(`${program.name} caused out of memory exception`)
              }  

              if(ramRequired >= 100){
                throw new Error(`${program.name} caused out of cpu exception`)
            }  
            let programToOpen = {name, ramRequired, cpuRequired};
            this.taskManager.push(programToOpen)
            return programToOpen;
        }

        taskManagerView(){
            if(this.taskManager.length == 0){
                return `All running smooth so far`;
            }
            let output = this.taskManager.reduce((acc, obj) => {
                acc += `Name - ${obj.name} | Usage - CPU: ${obj.cpuRequired}%, RAM: ${obj.ramRequired}%\n`;
            });

            return output;
        }


        calculateRequiredRamMemory(programRequiredSpace, totalRamMemory){
            let division = programRequiredSpace / totalRamMemory;
            let total = division * 1.5;
            return total;

        }
        calculateRequiredCPU(programRequiredSpace, CPU){
            let division = ( programRequiredSpace / CPU) / 500;
            let total = division * 1.5;
            return total;

        }


}

let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Word');
computer.openAProgram('Excel');
computer.openAProgram('PowerPoint');
computer.openAProgram('Solitare');

console.log(computer.taskManagerView());

