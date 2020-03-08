function Example(){
    try {
        throw new SyntaxError("Error!")
    }
    catch(ex){
        console.log(ex.name); //SyntaxError
        console.log(ex); // Error!
        console.error(ex.toString()); // SyntaxError: Error! colored in red
        console.error(ex.stack); // stack trace of the error
    }
}

Example();