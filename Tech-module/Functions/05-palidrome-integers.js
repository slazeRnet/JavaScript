function iterateArray(){
    let array = arguments[0];

    for (let n in  array) {
        let currentNumber = array[n];
        console.log(isPolidrome(currentNumber));
        
    }

    function isPolidrome(num){
        let number = num.toString();
        let temp = Array.from(number).reverse();
        let reversed = temp.join('');

        if(number == reversed){
            return true;
        }

        return false;
    }
}

iterateArray([123,323,421,121]);
iterateArray([32,2,232,1010]);
