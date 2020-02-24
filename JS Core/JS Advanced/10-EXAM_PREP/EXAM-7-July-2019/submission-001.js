var myArray = [
    {field: 'id', operator: 'eq', value: 1}, 
    {field: 'cStatus', operator: 'eq', value: 1}, 
    {field: 'money', operator: 'eq', value: 1}
];

myArray = myArray.filter(function( obj ) {
    return obj.field !== 'money';
});

console.log(myArray);
