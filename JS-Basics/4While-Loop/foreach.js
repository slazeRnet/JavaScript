// interesting code to find most stared actor
let actors = ['John Travolta', 'Marylin Monroe', 'A. Smith', 'A. Smith'];
let mostStarred = {};
actors.forEach(actor => {
    if (mostStarred.hasOwnProperty(actor)) {
        mostStarred[actor]++;
    } else {
        mostStarred[actor] = 1;
    }
}); //[ [ 'c', 2 ], [ 'a', 1 ], [ 'b', 1 ] ]

let theActor = Object.entries(mostStarred).sort((a, b) => b[1] - a[1]);

console.log(mostStarred); //{ 'John Travolta': 1, 'Marylin Monroe': 1, 'A. Smith': 2 }

console.log(`${theActor[0][0]} has participated in ${theActor[0][1]}`); //A. Smith has participated in 2

