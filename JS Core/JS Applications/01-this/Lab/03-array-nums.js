function arrayMap(arr, funcInput){

    let func = funcInput;
    
    let newArr = arr.map(func);

    function select(){
        let key = Object.keys(obj)[0];
    }
    return newArr;
    
}


let nums = [1,2,3,4,5];
console.log(arrayMap(nums,(item)=> item * 2)); // [ 2, 4, 6, 8, 10 ]

let letters = ["a","b","c"];
console.log(arrayMap(letters,(l)=>l.toLocaleUpperCase())) // [ 'A', 'B', 'C' ]
