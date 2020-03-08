
class MyClass{
    constructor(){
        
        this.arr = ['a', 'b', 'c'];
    }

    * do() {
        let i = 0;
        yield i++
       return arr[i];
    }
}

let arr = new MyClass();

console.log(arr.do());
console.log(arr.do());
console.log(arr.do());



