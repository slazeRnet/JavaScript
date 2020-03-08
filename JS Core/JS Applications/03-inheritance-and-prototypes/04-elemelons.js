function solve() {

    class Melon {

        constructor(weight, melonSort) {

            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }

            this.weight = weight;
            this.melonSort = melonSort;
        }

        toString() {
            let element;
            switch (this.constructor.name) {
                case 'Watermelon':
                    element = 'Water';
                    break;
                case 'Firemelon':
                    element = 'Fire';
                    break;
                case 'Earthmelon':
                    element = 'Earth';
                    break;
                case 'Airmelon':
                    element = 'Air';
                    break;
            }

            let output = `Element: ${element}\n`;
            output += `Sort: ${this.melonSort}\n`;
            output += `Element Index: ${this.elementIndex}`;

            return output;
        }


        get elementIndex() {

            return this.weight * this.melonSort.length;

        }
    }

    class Watermelon extends Melon {

        constructor(weight, melonSort) {

            super(weight, melonSort);
        }

    }

    class Firemelon extends Melon {

        constructor(weight, melonSort) {

            super(weight, melonSort);
        }

    }

    class Earthmelon extends Melon {

        constructor(weight, melonSort) {

            super(weight, melonSort);
        }
    }

    class Airmelon extends Melon {

        constructor(weight, melonSort) {

            super(weight, melonSort);
        }


    }

    class Melolemonmelon extends Watermelon {

        constructor(weight, melonSort) {

            super(weight, melonSort);
        }

        morph() {
            let constructor = this.constructor.name;
            Object.setPrototypeOf(Melolemonmelon.prototype, Firemelon);

            console.log(constructor);
            console.log(this);
            
            switch (constructor) {
                case 'Watermelon':
                    this.constructor = Firemelon;
                    break;
                case 'Firemelon':
                    this.constructor = Earthmelon;
                    break;
                case 'Earthmelon':
                    this.constructor = Airmelon;
                    break;
                case 'Airmelon':
                    this.constructor = Watermelon;
                    break;
            }

        }
    }

    return { Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon }
}

let result = solve();

let waterMelon = new result.Watermelon(40, 'Kingkaze');

console.log(waterMelon.toString());

let melolemonmelon = new result.Melolemonmelon(60, 'Melonsomething');

console.log(result.Melolemonmelon.prototype);
console.log(result.Melolemonmelon.__proto__);
console.log(melolemonmelon.prototype);
console.log(melolemonmelon.__proto__);
melolemonmelon.morph()

// console.log(melolemonmelon.constructor.name);

// melolemonmelon.morph();
// console.log(melolemonmelon.constructor.name);

// melolemonmelon.morph();
// console.log(melolemonmelon.constructor.name);

// melolemonmelon.morph();
// console.log(melolemonmelon.constructor.name);

// melolemonmelon.morph();
// console.log(melolemonmelon.constructor.name);

// melolemonmelon.morph();




