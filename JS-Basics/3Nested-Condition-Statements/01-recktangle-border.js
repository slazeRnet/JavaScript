function isInRange(input){
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let x = Number(input.shift());
    let y = Number(input.shift());

    var xLocatedOnSide = ((x >= x1 && x <= x2 )|| ( x >= x2 && x <= x1 )) && (y == y1 || y == y2);
    var yLocatedOnSide = ((y >= y1 && y <= y2 )|| ( y >= y2 && y <= y1 ))&& (x == x1 || x == x2);
    if(xLocatedOnSide || yLocatedOnSide){
        console.log("Border");
    }
    else{
        console.log("Inside / Outside");
    }
}

isInRange(["2",
   "-3",
   "12",
   "3",
   "12",
   "-1",
    ]);
