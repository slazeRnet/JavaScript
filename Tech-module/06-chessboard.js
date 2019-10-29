function createChessBoard(input){
let n = input;
let output = `<div class="chessboard">`;
let odd = "white";
let even = "black";
for(let a = 1; a <= n; a++){
    output += "\n" + `<div>`;
    for(let b = 1; b <= n; b++){
        let color = "";
    if((b + a) % 2 != 0){
            color = odd;
    }
    else{
        color = even;
    }
    output += "\n" + `<span class="${color}"></span>`;
    }
    output += "\n" + `</div>`;
}
output += "\n" + `</div>`;
console.log(output);
}

createChessBoard(3);
