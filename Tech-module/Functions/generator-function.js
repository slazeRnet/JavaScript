var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor

console.log('====================================');
console.log(GeneratorFunction); //ƒ GeneratorFunction()
console.log('====================================');

let newGeneratorFunction = new GeneratorFunction('a', 'while(true) { yield a * 2 }')

let iterator = newGeneratorFunction(10)
console.log(iterator.next().value)
console.log(iterator.next().done)
console.log(iterator.next().value)
console.log(iterator.next().done)
console.log(iterator.next().value)

// let getGenerator = function (i) {
    
//     return generator(i);

    function* getGenerator(i) {
            i *= 2;
             yield i;
             yield i + 1;
    }
// }

let iteraorGeneratorFunc = getGenerator(1);

console.log(iteraorGeneratorFunc.next().value); // 2
console.log(iteraorGeneratorFunc.next().value); // 4
console.log(iteraorGeneratorFunc.next().value); // 8