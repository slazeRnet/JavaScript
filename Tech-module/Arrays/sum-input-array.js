function solve(input){
    let array = input;
    let first = parseInt(array[0]);
    let lastIndex = array.length - 1;
    let third = parseInt(array[lastIndex]);

    let sum = first + third;
    console.log(sum);
}

// solve(['20', '30', '40']); // 60
// solve(['10', '17', '22', '33']);//43
// solve(['11', '58', '69']);//80
