let text = "Hello";
let tempArray = [...text];
tempArray[0] = "A";
console.log(tempArray.join('')); // Aello
