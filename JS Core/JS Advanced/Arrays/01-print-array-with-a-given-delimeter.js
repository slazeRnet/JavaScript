//01-print-array-with-a-given-delimeter.js
function joinByDelimeter(arg){
    let delimeter = arg[arg.length - 1];
    let arr = arg;
    arr.pop();

    let text = arr.join(delimeter);
    console.log(text);
    
}

joinByDelimeter(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']);
