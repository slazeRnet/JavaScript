class Hex {

    constructor(number){
        this.number = number;
    }

    valueOf(){
        return this.number;
    }

    toString(){

        let result = '0x' + this.number.toString(16).toUpperCase();
        return result;
    }

    plus(additionNumber){

        let n = parseInt(additionNumber.number, 10);
        this.number += n;

        return new Hex(this.number);
    }

    minus(subNumber){

        let n = parseInt(subNumber.number, 10);
        this.number -= n;

        return new Hex(this.number);
    }

    parse(num){

        this.number = parseInt(num, 16);
    }
}

// let n = new Hex(11);

// console.log(n.toString());

let FF = new Hex(255);
console.log(FF.toString()); //0xFF
FF.valueOf() + 1 == 256; // true
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');



