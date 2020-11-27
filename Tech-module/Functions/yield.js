function* counter(value) {
    let step;
   
    while (true) {
      step = yield ++value;
   
      if (step) {
        value += step;
      }
    }
   }
   
   const generatorFunc = counter(0);
   console.log(generatorFunc.next().value);   // 1
   console.log(generatorFunc.next().value);   // 2
   console.log(generatorFunc.next().value);   // 3
   console.log(generatorFunc.next(10).value); // 14
   console.log(generatorFunc.next().value);   // 15
   console.log(generatorFunc.next(10).value); // 26

   function f (){
       return 1
   }

   let a = f;

   console.log(a)