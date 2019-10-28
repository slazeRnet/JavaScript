function change(input){
    let coins = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    let change = Number(input.shift());
    let coinsCount = 0;
    let index = 0;
    while(change > 0){
        if(change - coins[index] >= 0)
        {
            change = change - coins[index];
            change = change.toFixed(2);
            coinsCount++;
            index = 0;
        }
        else if(change - coins[index] < 0)
        {
            index++;
        }
        if(change == 0){
            break;
        }
    }

    console.log(coinsCount);

}

change(["2.73"]);
