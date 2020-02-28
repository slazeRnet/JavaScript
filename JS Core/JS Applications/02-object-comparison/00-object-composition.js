const department = {
    name:'Human Resources',
    openTime:'9:00',
    personalCount:'7',
    internalObject: {
        address: "str. Ivan Vazov 30",
        email: "a@web.com"
    },

    //FUNCTION OVERRIDEING OF toString()
    toString: function(){
        return `${this.name} has internal object : ${this.internalObject.address}`
    }
}


console.log('department toString() : ' + department);

let arr = [{key: "value1"},{key: "value1"},{key: "value1"}];
const [obj, {key}] = arr; // (asigment by  reference to arr)
console.log(key); // value1 
obj.key = 5;
console.log(arr[0].key); // 5



//EXAMPLE 2   FUNCTION FOR CREATING OBJECTS BY CONCATENATION

function swimmer({name}){

    return {
        swim: () => console.log(`${name} swam`)
    }

}

function swimmingMonsterCreator(name){

    let monster = {name};

    return {
        ...monster,
        ...swimmer(monster)
    }
}

const mon = swimmingMonsterCreator('Monster');
mon.swim();



