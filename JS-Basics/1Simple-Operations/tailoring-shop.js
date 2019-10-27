  
    function prices(input){
        let ammount = Number(input.shift());//5
        let tableWidth = Number(input.shift());//1
        let tableLength = Number(input.shift());//0.5
         //rectangle tablecloth price
         let tableClothPriceUsd = 7;
         let tablePriceUsd = tableClothPriceUsd * ((tableWidth + 2 * 0.3) 
         * (tableLength + 2 * 0.3) * ammount);
         //square tablecloth price
         let sqrTableClothPrice = 9;
         let sqrtTablePriceUsd =sqrTableClothPrice * ((tableWidth / 2) 
         * (tableWidth /2) * ammount);

         let total = sqrtTablePriceUsd + tablePriceUsd;
         let totalUsd = total * 1.85;
        console.log(`${total.toFixed(2)} USD`)
        console.log(`${totalUsd.toFixed(2)} BGN`)
    }

    prices(["5", "1", "0.5"]);
    //72.85 USD
    //134.77 BGN
