let obj = {
    prop: 'text'
}

let f = () => {
    return this;
}

// Object.assign(obj, { f });

function anotherFunc() {
return f;
}

obj.anotherFunc = anotherFunc;

console.log(obj.anotherFunc()()); //false
console.log(f() === this); //true

// console.log(global);
module.exports= {
    t: 1
}
this.a = 1;

console.log(this === global);
// console.log(globalObject);
// console.log(window);

Object.defineProperty(Object.prototype, '__magic__', {
    get: function() {
      return this;
    }
})
__magic__.printEnv = __magic__;

console.log(Object.prototype === global);
console.log(printEnv);
console.log(printEnv === global);


