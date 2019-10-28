function countVolleyballMatches(input){
    let total = 0;
    let weekendsYear = 48;
    let year = input.shift();
    let hollydays = Number(input.shift());
    let jorneys = Number(input.shift());

    let weekendsInSofiaMatches = (weekendsYear - jorneys ) * 3 / 4;
    weekendsInSofiaMatches += jorneys;
    total = weekendsInSofiaMatches;
    total += hollydays * 2 / 3;
    if(year == "leap"){
        total += (total / 100) * 15;
    }
    total = Math.floor(total);
    console.log(total);
}

countVolleyballMatches(["normal", 6, 13]);
