function outer(){
    console.log(this);
    function inner(){
        console.log(this);

        // function aStepInner(){
        // console.log(this);
        
        // }
        // aStepInner({var:'text'});
    }
    inner().bind(this);
}
const obj1 = {'1': 'a', '2': 'b', func: outer};
const obj2 = {'1': 'a', '2': 'z', func: outer};
//outer(obj1, obj2);

obj1.func();
//outer(obj1);