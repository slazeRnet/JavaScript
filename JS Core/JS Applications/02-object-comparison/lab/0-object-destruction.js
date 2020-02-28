function destroy({weight, experience, levelOfHydrated, dizziness}){

    levelOfHydrated += weight;

return {weight, experience, levelOfHydrated, dizziness};

}

obj1= { weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true };

console.log(destroy(obj1));

console.log(obj1.levelOfHydrated);


