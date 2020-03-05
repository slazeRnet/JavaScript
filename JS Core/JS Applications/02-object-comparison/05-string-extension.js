function solve(){
    let proto = {

        ensureStart: function(str){

            let currentString = Array.from(this).join('');
            let doesItStart = true;

            for (let i = 0; i < str.length; i++) {
                if(currentString[i] !== str[i]){

                    doesItStart = false;
                    break;

                }
            }   

                if(!doesItStart){

                    currentString = str.concat(currentString);
                }

                return currentString;

        },
        ensureEnd: function(str){

            let currentString = Array.from(this).join('');
            let doesItStart = true;

            for (let i = currentString.length - 1;
                 i > (currentString.length - 1) - (str.length - 1);
                  i--) {
                if(currentString[i] !== str[i]){

                   doesItStart = false;
                    break;

                }
            }

            if(!doesItStart){

                currentString = currentString.concat(str);
            }

            return currentString;
        },
        truncate: function(n){

            let currentString = Array.from(this).join('');
            if(currentString.length < n){

                return currentString;

            }
            else{

                let splittedString = currentString.split(' ');
                //console.log(splittedString);
                if(splittedString.length == 1 && splittedString[0].length <= 3){
                    return '.'.repeat(n);
                }
                if(splittedString.length == 1){

                    let currentString = splittedString[0].split('');
                    let index = currentString.length - n;
                    currentString.splice(index, n);
                    let result = currentString.join('') + '.'.repeat(3);
                   // let output = 

                    return result;
                }
            }

        },
        isEmpty: function(){
            if(this.length < 1){
                return true;
            }
    
            return false;
        }
    };

    let str = new String('my string');
    let sample2 = 'hello';
     String.prototype = proto;
     //str.__proto__ = proto;
     str.__proto__.__proto__ = proto;
    console.log(str.isEmpty());
    console.log(str.ensureStart('hello '));
    console.log(str.ensureEnd(' dot'));
    console.log();
    console.log(sample2.truncate(4));
    
    
    

}

solve();

