function buyFruit(fruit, grams, price){
 let kgrams = (grams / 1000);
let total = kgrams * price;
console.log(`I need $${total.toFixed(2)} to buy ${kgrams.toFixed(2)} kilograms ${fruit}.`);

}

buyFruit('orange', 2500, 1.80); //I need $4.50 to buy 2.50 kilograms orange.
