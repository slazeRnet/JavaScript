const readline = require('readline');
let d = 'dependencies'; // name of the aggragetor

let dependencies = require('./' + d)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let exec

let arrDependencies = [
'0 => Intro to Express',
'1 => express-generator',
'2 => serve static files'
]

let listDep = (() => {
let result = arrDependencies.reduce( (sum, current, index) => {
   return  sum + `\n${current}\n`;
} )

return result;

})()

rl.question('Plese input the number of the desired dependency:\n' + listDep, (answer) => {
    //console.log('Selected : ' + arrDependencies[answer])
    switch(answer){
        case '0': 
        dependencies.serverIntro();
        break;
        case '1': 
        dependencies.expressGenerator();
        break;
        case '2': 
        dependencies.serveStaticFiles();
        break;
    }
})