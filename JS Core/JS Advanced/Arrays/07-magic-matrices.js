function magicMatrices(input){
    let sums = Array(input.length).fill(0);
for (const iterator of input) {
    for (let index = 0; index < iterator.length; index++) {
        sums[index] += iterator[index];
    }
}

let condition = true;
let initialValue = sums[0];
for (let index = 1; index < sums.length; index++) {
    if(initialValue != sums[index]){
        condition = false;
        break;
    }
}
console.log(condition ? 'true' : 'false');


}

magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);

    magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);

            magicMatrices([[1, 0, 0],
                [0, 0, 1],
                [0, 1, 0]]);
