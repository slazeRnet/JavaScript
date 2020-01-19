function sortArray(input){
    let arr = input;
    arr.sort(function(a, b){
    let first = a.length;
    let secound = b.length;
    let result = first - secound;
    if(result == 0){
        let a1 = a[0].charCodeAt(0);
        let b2 = b[0].charCodeAt(0);
        result = a1 -b2;
    }
    return result;
    });
    

for (const iterator of arr) {
    console.log(iterator);
    
}
}

sortArray(['alpha', 
'beta', 
'gamma']);
sortArray(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);
sortArray(['test', 
'Deny', 
'omen', 
'Default']);    
