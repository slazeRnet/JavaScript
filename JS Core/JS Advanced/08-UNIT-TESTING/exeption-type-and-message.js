function Example(){
    try {
        throw new SyntaxError("Error!")
    }
    catch(ex){
        console.log(ex.name); //SyntaxError
        console.log(ex); // Error!
        
        
    }
}
