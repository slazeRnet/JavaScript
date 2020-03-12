let arr = [5, 2, 4, 6, 1, 3];

//a clear example of insertion sort
function sort(unsorted){


    for (let j = 1; j < unsorted.length; j++) {
       
        let key = unsorted[j];
        let i = j - 1;

        while( i >= 0 && unsorted[i] > key){

            unsorted[i + 1] = unsorted[i];
            i--;
        }
        unsorted[i + 1] = key;
    }

    return unsorted;
}

let result = sort(arr);

console.log(result); //[ 1, 2, 3, 4, 5, 6 ]

