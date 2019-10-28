function cakePieces(input){
    var dimension1 = Number(input.shift());
    var dimension2 = Number(input.shift());
    var cakeSize = dimension1 * dimension2;
    var cakeConsumed = 0;
    var isEnough = true;
    var command = input.shift();
    while(command != "STOP"){
        let currentPiece = Number(command);
        if(currentPiece + cakeConsumed <= cakeSize){
            cakeConsumed += currentPiece;
        }
        else{
            cakeConsumed += currentPiece;
            let needPeeces = Math.abs(cakeSize 
                - (cakeConsumed));
            console.log(`No more cake left! You need ${needPeeces} pieces more.`);
            isEnough = false;
            break;
        }
        command = input.shift();
    }
    if(isEnough){
        let piecesLeft = cakeSize - cakeConsumed;
        console.log(`${piecesLeft} pieces are left.`);
    }
}

cakePieces([
    "10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"
]);
