(function solve(){
    Array.prototype.last = function(){
        return this[this.length - 1];
    }
    
    Array.prototype.skip = function(n){
       
        let newArr = [];
        let i = 0;
        while(i < this.length){
    
            if(i >= n){
                newArr.push(this[i]);
            }
            i++;
        }
    
        return newArr;
    
    }
    
    Array.prototype.take = function(n){
        let newArr = [];
        let iterator = this.entries(); 
        let i = 0;
        while(i < n){
            let value = iterator.next().value;
            newArr.push(value[1]);
            i++;
        }
        return newArr;
    }
    
    Array.prototype.sum = function(){
        return this.reduce((acc, current) => {
            return acc += current;
        })
    }
    
    Array.prototype.average = function(){
        let sum = this.reduce((acc, current) => {
            return acc += current;
        })
    
        return sum / this.length;
    }
} ())


let arr = [1, 2, 3, 4, 5];



arr.skip(2);
console.log(arr.skip(2));

