function solve() {
    let connectionBox = document.querySelector('#info');
    let departButton = document.querySelector('#depart');
    let arriveButton = document.querySelector('#arrive');

    departButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e);
        
        depart();
    } );

    arriveButton.addEvenListener('click', (e) => {
        e.preventDefault();
        console.log(e);
        
        arrive();
    });

    function arrive(){

    }

    function depart(){


    }
}

var result = solve();

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

