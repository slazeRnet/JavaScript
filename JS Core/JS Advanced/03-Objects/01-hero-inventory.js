function generateHeroesJson(input){
    let heroes = [];
    for (let index = 0; index < input.length; index++) {
        let arr = input[index].split(' / ');
        let name = arr[0];
        let age = parseInt(arr[1]);
        let items = arr[2].split(', ');
        
        let hero = {
            name: name,
            level: age,
            items: items
        }

        heroes.push(hero);
    }   
    console.log(JSON.stringify(heroes));
}

generateHeroesJson(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);
