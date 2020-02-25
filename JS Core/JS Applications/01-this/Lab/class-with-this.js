class Person{
    constructor(fn, ln){
        this.fn = fn;
        this.ln = ln;
        this.fullName = function(){
            return this.fn + ' ' + this.ln;
        };
    }
}

let person = new Person('ivan', 'Georgiev');

console.log(person.fullName());
