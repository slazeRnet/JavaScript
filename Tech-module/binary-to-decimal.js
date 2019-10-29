function toDecimal(input){
let binaryNumber = Number(input);
let decimal = 0;

let counter = 0;
while(binaryNumber > 0){
   if(binaryNumber % 10 == 1){
        decimal += Math.pow(2, counter);
   }
   binaryNumber /= 10;
   binaryNumber = binaryNumber.toFixed();
   counter++;

}
console.log(decimal);

}

toDecimal(11110000);
