function solve() {
    let connectionBox = document.querySelector('#info');
    let departButton = document.querySelector('#depart');
    let arriveButton = document.querySelector('#arrive');

    let currentStop = 'depot';
    let nextStopId;

    function getSheduleById(id) {
        let requestedId = id;

        if (!id) {
            requestedId = 'depot'
        }


        return fetch(`https://softuni1.firebaseio.com/schedule/${requestedId}.json`);
    }
    
    function setCurrentStop(stopName) {

        currentStop = stopName;
    }

    function arrevingStopNext(id) {
        let requestedId = id;

        fetch(`https://softuni1.firebaseio.com/schedule/${requestedId}.json`)
            .then(x => x.json())
            .then(x => currentStop = x.name);

    }

    function displayNextStop(stopName){
        
        connectionBox.innerHTML = `Next Stop ${stopName}`;

    }

    function setArriving(stopName) {
        connectionBox.innerHTML = `Arriving ${stopName}`;
    }


  




    function depart() {
        setArriveButtonToActive();
        
        getSheduleById(currentStop)
            .then(x => x.json())
            .then(x => {

                setCurrentStop(x.next);
                arrevingStopNext(x.next);
            })
            displayNextStop(currentStop)


    }

    function arrive() {

        setDepartButtonToActive();
        arrevingStopNext(currentStop);
        console.log(currentStop);

        setNextStop(stopOfArrival.name);

    }

    function setArriveButtonToActive() {
        departButton.setAttribute('disabled', 'true');
        arriveButton.removeAttribute('disabled');
        //arriveButton.attributes.disabled = false;
        console.log(arriveButton.attributes.disabled);

    }

    function setDepartButtonToActive() {
        departButton.removeAttribute('disabled');

        arriveButton.setAttribute('disabled', 'true');
    }

    return {
        arrive,
        depart
    }

}

let result = solve();

// // let currentStopId = 'depot';
//     // let currentStopName = '';
//     // let extStop = '';

//     // function setStateToTraveling(){
//     //     departButton.attributes.disabled = true;
//     //     arriveButton.attributes.disabled = false;
//     // }
//     // function setStateToIdle(){
//     //     departButton.attributes.disabled = false;
//     //     arriveButton.attributes.disabled = true;
//     // }

//     function getSheduleById(id){
//         let requestedId = id;

//         if(!id){
//             requestedId = 'depot'
//         }


//         return fetch(`https://softuni1.firebaseio.com/businfo/schedule/${requestedId}.json`)
//     }

//     // function setNextStop(stopName){
//     //     connectionRef.innerHTML = `Next Stop ${stopName}`;
//     // }

//     // function setArriving(stopName){
//     //     connectionRef.innerHTML = `Arriving ${stopName}`;
//     // }


//     function depart() {

//         getSheduleById()
//         .then(x => x.json())
//         .then(x =>
//             {
//                 console.log(x);

//                 nextStop = x.next;
//                 setNextStop(x.name);
//             });


//             setStateToTraveling();
//     }

//     function arrive() {

//         console.log('depart');

//         // currentStopId = nextStop;
//         // setArriving(currentStopName);

//         // setStateToIdle();
//     }

//     return {
//         depart,
//         arrive
//     };

