function solve(){
    let proto = {

        ensureStart: function(str){

            let doesItStartWith = true;
            let newString = '';

            for (let i = 0; i < str.length; i++) {
                if(this[i] !== str[i]){

                    newString = this;

                    doesItStartWith = false;

                    return newString;
                }
            }

            if(doesItStartWith){
                newString = this.splice(0, 0, str);
            }

            return newString;
        },
        isEmpty: function(){
            if(this.length < 1){
                return true;
            }
    
            return false;
        }
    };

    let str = new String('my string');
     String.prototype = proto;
     str.__proto__ = proto;
    console.log(str.isEmpty());
    console.log(str.ensureStart('hello '));
    

}

solve();

