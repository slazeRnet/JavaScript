function findLibrary(input){
    let selectedBook = input.shift();
    let itterations = Number(input.shift());
    let isFound = false;
    let counter = 0;
    while(itterations >= counter){
        let currentBook = input.shift();
        counter++;
        if(currentBook == selectedBook){
            isFound = true;
            break;
        }
    }
    if(isFound){
        console.log(`You checked ${counter - 1} books and found it.`);
    }
    else{
        console.log(`The book you search is not here!
        You checked ${counter - 1} books.`);
    }
}

findLibrary([
  "Troy",
  "8",
  "Stronger",
  "Life Style",
  "Troy"
]);
