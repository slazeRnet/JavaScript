function display(stopName, status){
        
    if(status === 'depart'){

        connectionBox.innerHTML = `Next Stop ${stopName}`;

    }else{

        connectionBox.innerHTML = `Arriving ${stopName}`;

    }

}

class Button{

    constructor(elementId){
        this._button = document.querySelector(`#${elementId}`);
    }

    activate(){
            this._button.removeAttribute("disabled");
    }

    disable(){
           this._button.setAttribute('disabled', 'true');
    }
}

class BusDataBase{

    static sayHello(){

        console.log('hello');
        
    }
}

function solve() {

    let connectionBox = document.querySelector('#info');
    let departButton = new Button('depart');
    let arriveButton =  new Button('arrive');

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




    function depart() {
        
        departButton.disable();
        arriveButton.activate();
        
    }   

    function arrive() {

        arriveButton.disable();
        departButton.activate();
    }

    return {
        arrive,
        depart
    }

}

let result = solve();
