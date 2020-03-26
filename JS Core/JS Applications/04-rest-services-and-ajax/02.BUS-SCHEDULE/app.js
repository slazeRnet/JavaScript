function display(stopName, status){

    let connectionBox = document.querySelector('#info');
        
    if(status === 'depart'){

        connectionBox.innerHTML = `Next Stop ${stopName}`;

    }else{

        connectionBox.innerHTML = `Arriving at ${stopName}`;

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

class BusShedule{

    static async depart(requestedStopId){

        let url = `https://softuni1.firebaseio.com/schedule/${requestedStopId}.json`;
        let next;
        await fetch(url)
        .then(x => x.json())
        .then(x => {

            console.log(`depart x = ${JSON.stringify(x)}`);
            console.log(`at url : ${url}`);
            
            display(x.name, 'depart');
           next = x.next;
        })
        
        //return next;
    }

    static async arrive(requestedStopId){

        let url = `https://softuni1.firebaseio.com/schedule/${requestedStopId}.json`;
        var next;
        await fetch(url)
        .then(x => x.json())
        .then(x => {

            console.log(`arrive x = ${JSON.stringify(x)}`);
            console.log(`at url : ${url}`);

            display(x.name, 'arrive');
            next = x.next;
        });
        
        console.log(`next : ${next}`);
       console.log(next);
        
        return next;
    }
}

function solve() {

    let departButton = new Button('depart');
    let arriveButton =  new Button('arrive');

    let currentStop = 'depot';

    async function depart() {
        
        departButton.disable();
        arriveButton.activate();
        
        await BusShedule.depart(currentStop);
    }   

    async function arrive() {

        arriveButton.disable();
        departButton.activate();

        currentStop = await BusShedule.arrive(currentStop)
        .then(x => {
            console.log(`String(x) = ${String(x)}`);
            
            return String(x)
        });
        await console.log(`BusShedule.arrive(currentStop) = ${currentStop}`);
        
    }

    return {
        arrive,
        depart
    }

}

let result = solve();
