let sportAthletes = [ 
{name: 'Ivan', score: 5, lastCompetition: '05/12/2005'},
{name: 'Maria', score: 1, lastCompetition: '05/12/2006'},
{name: 'Gosho', score: 9, lastCompetition: '05/08/2005'},
{name: 'Ivan', score: 1, lastCompetition: '05/02/2012'},
{name: 'Gosho', score: 0, lastCompetition: '05/12/2005'}
]

let rest1 = sportAthletes.reduce((acc, curr, index, array) => {
    let same = acc.find(e => e.name === curr.name);

    if(!same){

        acc.push(curr);

    }
    else{
        same.score += curr.score;
    }

    return acc;
}, []);

// reduce doesn't change the old reference but creates a new one with a new array / object
console.log(sportAthletes);
// [
//     { name: 'Ivan', score: 6, lastCompetition: '05/12/2005' },
//     { name: 'Maria', score: 1, lastCompetition: '05/12/2006' },
//     { name: 'Gosho', score: 9, lastCompetition: '05/08/2005' },
//     { name: 'Ivan', score: 1, lastCompetition: '05/02/2012' },
//     { name: 'Gosho', score: 0, lastCompetition: '05/12/2005' }
//   ]
console.log(rest1);

// [
//     { name: 'Ivan', score: 6, lastCompetition: '05/12/2005' },
//     { name: 'Maria', score: 1, lastCompetition: '05/12/2006' },
//     { name: 'Gosho', score: 9, lastCompetition: '05/08/2005' }
//   ]
