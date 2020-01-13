function partyList(input){

    let partyGuests = new Array;

    input.forEach(element => {
        let length = element.split(' ').length;
        let name = element.split(' ')[0];
        let command = element.split(' ')[2]

        if(command == 'not'){
            if(!partyGuests.includes(name) ){
                console.log(name + ' is not in the list!');
                
            }
            else{
                partyGuests.splice(partyGuests.indexOf(name), 1); // removes element from the array
            }
        }
        else{
            if(partyGuests.includes(name)){
                console.log(name + ' is already in the list!');
                
            }
            else{
                partyGuests.push(name);
            }
        }

        //printing all the guests

    });
            partyGuests.forEach(guest => {
                console.log(guest);
                
            });
}

partyList(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']);
