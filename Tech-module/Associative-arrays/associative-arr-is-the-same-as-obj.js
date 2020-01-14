//the folling code ...
let arr1 = {};

arr1['name'] = 'Ivan';
arr1['age'] = 40;
arr1['city'] = 'Burgas';

//is the same as :

let arr2 = {'name' : 'Ivan', 'age' : 40,'city' : 'Burgas'};

for (const key in arr1) {
    console.log(key + " - " + arr1[key]);
    
}

for (const key in arr2) {
    console.log(key + " - " + arr2[key]);
    
}
