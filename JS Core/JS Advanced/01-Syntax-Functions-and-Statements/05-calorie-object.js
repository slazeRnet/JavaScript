function createObject(){
   let arr = arguments[0];
    let obj = {};

    for (let index = 0; index < arr.length; index += 2) {
        let foodName = arr[index];
        let foodCals = parseInt(arr[index + 1]);

        obj[foodName] = foodCals;
    }

    console.log(obj);
    
}

createObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
createObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
