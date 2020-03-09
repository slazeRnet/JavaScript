let result = require('./06-computer');
let keyboard = new result.Keyboard('Logitech',70);
let monitor = new result.Monitor('Benq',28,18);
let desktop2 = new result.Desktop("JAR Computers",3.3,8,1,keyboard,monitor);

console.log(desktop2);

function createMixins(classToExtend) {

    function computerQualityMixin(classToExtend){

        classToExtend.__proto__.getQuality = () =>{

            let result = (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
            return result;
        }
    }

    computerQualityMixin(classToExtend);
    return {
        computerQualityMixin
        //styleMixin
    }
}

let functionality = createMixins();

createMixins(desktop2);
//functionality.computerQualityMixin();

console.log(desktop2.getQuality());


