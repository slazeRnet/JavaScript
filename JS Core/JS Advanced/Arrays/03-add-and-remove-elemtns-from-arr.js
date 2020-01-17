function addAndRemove(arg){
let value = 1;
let counter = 0;
let arr = new Array();
while(arg.length > 0){
if(arg.shift() == 'add'){
arr.push(value);
}
else{
    arr.pop();
}
value++;
counter++;
}

if(arr.length == 0){
    console.log('Empty');
    
}
else{
    arr.forEach(element => {
        console.log(element);
        
    });
    
}
}

addAndRemove(['add', 
'add', 
'add', 
'add']
);
addAndRemove(['add', 
'add', 
'remove', 
'add', 
'add']
);
addAndRemove(['remove', 
'remove', 
'remove']
);
