function rotateArray(arg){
let rotations = parseInt(arg.pop());
let arr = arg;
while(rotations > 0)
{
    let initialValue = arr[0];
    moveToNextIndex(0, initialValue);
    rotations--;
}
console.log(arr.join(' '));

function moveToNextIndex(index, value){
    let temp;
    if(index < arr.length - 1){
        temp = arr[index + 1];
        arr[index + 1] = value;
        index++;
        moveToNextIndex(index, temp);
    }
    else if( index == arr.length - 1){
        arr[0] = value;
    }
}
}

rotateArray(['1', 
'2', 
'3', 
'4', 
'2']);
rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']);
