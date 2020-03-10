function solve() {
    let connectionRef = document.querySelector('.info');
    let departActionRef = document.querySelector('#depart');
    let arriveActionRef = document.querySelector('#arrive');


    function getSheduleById(id){
        let requestedId = id;

        if(!id){
            requestedId = 'depot'
        }


        return fetch(`https://softuni1.firebaseio.com/businfo/schedule/${requestedId}.json`)
    }
    function depart() {

        if(connectionRef.innerHTML === 'Not connected'){
            connectionRef.innerHTML = 'Next stop depot';
            requestedId = 'depot'

            departActionRef.attributes.disabled = true;
            arriveActionRef.attributes.disabled = false;
            return;
        }


        getSheduleById()
        .then(x => x.json())
        .then(x => console.log(x + 'firebase'))
        console.log('Depart TODO...');
    }

    function arrive() {
        console.log('Arrive TODO...');
    }

    return {
        depart,
        arrive
    };
}

let result = solve();