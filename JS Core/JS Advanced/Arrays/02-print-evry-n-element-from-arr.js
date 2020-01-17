function printNElement(arg){
    let step = parseInt(arg[arg.length - 1]);
    arg.pop();
for (let index = 0; index < arg.length; index+= step) {
    console.log(arg[index]);
    
}
}

printNElement(['5', 
'20', 
'31', 
'4', 
'20', 
'2']);
