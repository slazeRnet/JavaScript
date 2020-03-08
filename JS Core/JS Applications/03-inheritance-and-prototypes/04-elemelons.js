function solve() {

    class Melon {

        constructor(weight, melonSort) {

            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }

            this.weight = weight;
            this.melonSort = melonSort;
            this.element;
        }

        toString() {
            //let element;
            // switch (this.constructor.name) {
            //     case 'Watermelon':
            //         element = 'Water';
            //         break;
            //     case 'Firemelon':
            //         element = 'Fire';
            //         break;
            //     case 'Earthmelon':
            //         element = 'Earth';
            //         break;
            //     case 'Airmelon':
            //         element = 'Air';
            //         break;
            // }

            let output = `Element: ${this.element}\n`;
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
            this.element = 'Water';
        }

    }

    class Firemelon extends Melon {

        constructor(weight, melonSort) {

            super(weight, melonSort);
            this.element = 'Fire';

        }

    }

    class Earthmelon extends Melon {

        constructor(weight, melonSort) {

            super(weight, melonSort);
            this.element = 'Earth';

        }
    }

    class Airmelon extends Melon {

        constructor(weight, melonSort) {

            super(weight, melonSort);
            this.element = 'Air';

        }


    }

    class Melolemonmelon extends Watermelon {

        constructor(weight, melonSort) {

            super(weight, melonSort);
            this.element = 'Water';
        }

        morph() {
            let constructor = this.element;
            
            switch (constructor) {
                case 'Water':
                    this.element = 'Fire';
                    break;
                case 'Fire':
                    this.element = 'Earth';
                    break;
                case 'Earth':
                    this.element = 'Air';
                    break;
                case 'Air':
                    this.element =' Water';
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

console.log(melolemonmelon.element);

melolemonmelon.morph()

console.log(melolemonmelon.element);
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




