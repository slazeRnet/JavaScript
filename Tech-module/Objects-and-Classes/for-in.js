function solve(firstName, lastName, age){
    let person = {
        firstName,
        lastName,
        age
    };

    for (const pair in person) {
      console.log(pair + ' : ' + person[pair]);
    }
}

solve('Ivan', 'Mihailov', 20);
