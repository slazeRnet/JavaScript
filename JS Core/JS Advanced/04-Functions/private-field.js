//private field in function example
let person = (function (){
    var name;
    var age = 0;

    function grow(years){
        age += years;
    }

    function howOld(){
        return age;
    }
    return {
        name: name,
        grow: grow,
        howOld: howOld
    };
})();

person.name = 'pesho';

person.grow(5);

console.log(`${person.name} - ${person.howOld()}`); // pesho - 5


