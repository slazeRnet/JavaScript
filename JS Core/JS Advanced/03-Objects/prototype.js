let obj = {
name: "Ivan",
age: 20
};

let obj2 = {
    name: "Ivan",
    age: 20
    };

    let obj3 = {
        rank: "Newbie",
        mail: 'a@a.com',
        height: 200
        };
function create(city, houseType){
    this.city = city;
    this.houseType = houseType;
}
let avaliable = true;
obj.__proto__.country = "BG"; // obj.prototype will throw error
//create.prototype.avaliable = {c: true};
let house1 = create('Sofia', 'apt');
Object.setPrototypeOf(create, {avaliable})
console.log(Object.isExtensible(create));
console.log(Object.setPrototypeOf);

console.log(obj.__proto__); //{ country: 'BG' }
console.log(obj2.__proto__); //{ country: 'BG' }
console.log(obj3.__proto__); //{ country: 'BG' }
console.log(create.prototype); //error

//checking in object contains specific properties
console.log(obj.hasOwnProperty('name')); //true
console.log(obj.hasOwnProperty('mail')); //false
console.log(obj.hasOwnProperty('country')); //false (country is property to obj's prototype but not the Object itself)


