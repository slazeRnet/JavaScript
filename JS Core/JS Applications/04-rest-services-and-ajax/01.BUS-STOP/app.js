
function getInfo() {
    let button = document.getElementById('submit');
    let buses = document.querySelector('body  div div ul');
    let stopName = document.getElementById('stopName');
    
    button.addEventListener('click', () => {
        //removes all buses before each query
        clearBusList();
        let stopInputValue = document.querySelector('#stopId').value;
        let url = `https://busstop-f2d62.firebaseio.com/businfo/${stopInputValue}.json`;
        fetch(url)
        .then(x => x.json())
        .then(x => {

            clearBusList();
            stopName.innerText = x.name;
            addBusToList(x.buses);

        })
        
    });

    //displays the buses on the buses element
    function addBusToList(busesObject){

        let busToArray = Object.entries(busesObject);

        //iterates through the buses of the current bus stop and appends them to the buses element
        for (const bus of busToArray) {
            
        let li = document.createElement('li');
        let content = `Bus ${bus[0]} arrives in ${bus[1]}`;
        li.innerText = content;
        
        buses.appendChild(li);
        }
        
    }

    function clearBusList(){
        buses.innerHTML = '';
        stopName.innerText = '';
    }
}