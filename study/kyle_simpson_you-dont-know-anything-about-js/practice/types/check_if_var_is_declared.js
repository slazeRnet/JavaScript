if(typeof debug){ // true because value "undefined" is truthy
    console.log(typeof debug) //undefiend
}
// console.log(debug ? true : false); // ReferenceError: debug is not defined
if(this.debug){ // false
}
( () => {
    console.log(this) //{}
    console.log(this.debug) // undefined
})()

var a;

if(typeof a){ // true because value "undefined" is truthy
    console.log(typeof a); //undefiend
}

if(this.a){ // false
}
