function sumTheTheNumbers(input){
    let n = Number(input.shift());
    let max = Number.MIN_SAFE_INTEGER;
    let totalSum = 0;
    for(let i = 1; i <= n; i ++){
        let num = Number(input.shift());
        if(num > max) max = num;
        totalSum += num;
    }
    if(totalSum / max == 2){
        console.log(`Yes` + "\n" + `Sum = ${max}`);
    }
    else{
        let diff = Math.abs(max - (totalSum - max));
        console.log(`No` + "\n" + `Diff = ${diff}`);
    }
}

sumTheTheNumbers([
    "7",
    "3",
    "4",
    "1",
    "1",
    "2",
    "12",
    "1"
]);
