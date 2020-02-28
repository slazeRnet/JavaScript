function solve({weight, experience, levelOfHydrated, dizziness}){
    if(dizziness){
        levelOfHydrated += ((weight * 0.1) * experience);
    }

    let obj = {
        weight,
        experience, 
        levelOfHydrated,
        dizziness
    }
    obj.dizziness = false;
    return obj;
}

console.log(solve(
    { weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
    ));
console.log(solve(
    { weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
    ));
console.log(solve(
    { weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
    ));
