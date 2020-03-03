function solve(template){

    let myObj = {
      __proto__: {},
      extend: function (template) {

        let extendProto = {};
        let extendObject = {};
        for(var prop in template){

            if(typeof(template[prop]) == 'function'){
               extendProto[prop] = template[prop];
                  
            }
            else{
              extendObject[prop] = template[prop];
            }
            
        }
        this.__proto__ = extendProto;
        Object.assign(this, extendObject);
        }
    }
    myObj.extend(template);
    
    
    
    
    //   myObj.extend(template);
    //   console.log(myObj.__proto__); //Object {extensionMethod: }
    //   console.log(template); //Object {extensionMethod: , extensionProperty: "someString"}
    // console.log(myObj); //{ extend: [Function: extend], extensionProperty: 'someString' }
    //   myObj.__proto__.extensionMethod(); //say something
    return myObj;
      

}    
let template = {
        extensionMethod: function() {console.log(`say something`)},
        extensionProperty: 'someString'
      }
console.log(solve(template).__proto__); //{ extensionMethod: [Function: extensionMethod] }


