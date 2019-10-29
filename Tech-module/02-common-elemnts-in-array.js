function commonElements(array1, array2){
    let matches = [];
    for(let i = 0; i < array1.length; i++){
        for(let j = 0; j < array2.length; j++){
            if(!matches.includes(array1[i]) 
            && array1[i] == array2[j]
            && typeof(array1[i]) == typeof(array2[j])){
                matches.push(array1[i]);
            }
        }
    }

    for (let element of matches){
        console.log(element);
    }

}

commonElements(
    ["Hey", "hello", 2, 4, "Pesho", "e"],
     ["Pecho", 10, "hey", 4, "hello", "2"]
);
