class Stringer{
    constructor(text, length){
        this.text = text;
        this.length = length;
    }
    get innerString(){
        let lastCharIndex = this.length;
        let output = this.text.substring(0, lastCharIndex);
        if(output.length < this.text.length){
            output += '...';
        }
        return output;
    }

    get innerLength(){
        return this.length;
    }
    increase(size){
        this.length += size;
    }

    decrease(size){
        this.length -= size;
        if(this.length < 0){
            this.length = 0;
        }
    }

    toString(){
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
