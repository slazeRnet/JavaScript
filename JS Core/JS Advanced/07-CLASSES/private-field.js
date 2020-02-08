class Cube{
    #a;
    #b;
    constructor(a, b){
        this.#a = a;
        this.#b = b;
    }

    get number(){
        return this.#a * this.#b;
    }

}

let cube = new Cube(2, 2);

console.log(cube.number); // 4
