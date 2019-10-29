function equalSums(input){
    let array = [];
    array = input.slice();
    let leftSum = Number.MIN_VALUE;
    let rightSum = Number.MIN_VALUE;
    let index = -1;
    for(i = 0; i < array.length; i++){
        let currentLeft = Number.MIN_VALUE;
        let currentRight = Number.MIN_VALUE;
        // left
        if(i > 0){
            for(let a = i -1; a >= 0; a--){
                currentLeft += array[a];
            }
        }
        if(i < array.length){
            for(let a = array.length -1; a > i ; a--){
                currentRight += array[a];
            }
        }
        if( array.length == 1)
        {
            index = 0;
            break;
        }
        if(currentLeft != Number.MIN_VALUE && currentLeft == currentRight){
            index = i;
            break;
        }
    }
    if(index > -1)
    console.log(index);
    else
    console.log("no");
}

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]); // 3
