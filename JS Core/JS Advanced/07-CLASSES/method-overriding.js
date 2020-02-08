class Person{
    constructor(name, lastName, age, email){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(){
        return `${this.name} ${this.lastName}`
    }
}

let person = new Person('petko', 'ivanov', 22, 'a@abv.bg')

console.log(person.toString()); //petko ivanov

