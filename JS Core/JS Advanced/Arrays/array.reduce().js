function generateSubsequence(input){
    let arr = input;
    let newArr = new Array;
    newArr.push(arr[0]);

    arr.reduce((firstElement, currentValue) =>
    {
        if(currentValue >= newArr[newArr.length - 1]){
            newArr.push(currentValue);
        }
    });

    newArr.forEach(num =>
        {
            console.log(num);
            
        });
}

generateSubsequence([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]);

generateSubsequence([1, 
        2, 
        3,
        4]);

generateSubsequence([20, 
            3, 
            2, 
            15,
            6, 
            1]);
