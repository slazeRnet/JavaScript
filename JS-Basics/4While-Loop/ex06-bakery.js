function bakery(input){
    
    let  n = Number(input.shift());
    let array = new Array(n * 4);
    let totalCookies = 0;
    let totalCakes = 0;
    let totalWaffles = 0;
    let cookies = 0;
    let cakes = 0;
    let waffles = 0;
    let counter = 1;
    while(counter <= n){
        let name = input.shift();
        let command = input.shift();
        while(command != "Stop baking!")
        {
            let type = command;
            let quantity = Number(input.shift());
            if(type == "cookies"){           
                cookies +=  quantity;
            }
            else if(type == "cakes"){
                cakes += quantity;
            }
            else if(type == "waffles"){
               waffles += quantity;
            }
            command = input.shift();
        }

        // сладки - 1,50, торти - 7,80, гофрети - 2,30
        
        console.log(`${name} baked ${cookies} cookies, ${cakes} cakes and ${waffles} waffles.`);
        totalCookies += cookies;
        totalCakes += cakes;
        totalWaffles += waffles;
        cookies = 0;
        cakes = 0;
        waffles = 0;
        counter++;
    }


        let cookiesValue = totalCookies * 1.50;
        let cakesValue = totalCakes * 7.80;
        let wafflesValue = totalWaffles * 2.30;
        let total = cookiesValue + wafflesValue + cakesValue;
        let items = totalCookies + totalCakes + totalWaffles;
    console.log(`All bakery sold: ${items}`);
    console.log(`Total sum for charity: ${total.toFixed(2)} lv.`);
}

bakery([
   "3",
   "Iva",
   "cookies",
   "5",
   "cakes",
   "3",
   "Stop baking!",
   "George",
   "cakes",
   "7",
   "waffles",
   "2",
   "Stop baking!",
   "Ivan",
   "cookies",
   "6",
   "Stop baking!"
]);
