function solve(){

    let myObj = {
      __proto__: {},
      extend: function (template) {
          let props = Object.getPrototypeOf(template);
           console.log(props);
           
        }
    }


    let template = {
        extensionMethod: function() {console.log(`say something`)},
        extensionProperty: 'someString'
      }


      for(var prop in template){

          if(typeof(template[prop]) == 'function'){
             myObj.__proto__.prop = template[prop];
                console.log(template[prop]);
                
          }
          
      }
      console.log(myObj.__proto__);
      console.log(template);
      console.log(myObj);
      template.extensionMethod();

}    

solve();
