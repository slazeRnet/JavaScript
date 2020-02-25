function greet(...arr){
    //let arr = [...arguments];
    for (const str of arr) {
        console.log('Hey ' + str.name);
        
    }
    
}

greet.call(this , {name:'Petar'}, {name:'Amanda'}); 
// Hey Petar
//Hey Amanda