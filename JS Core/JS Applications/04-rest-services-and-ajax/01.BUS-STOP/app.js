import fetch from "node-fetch";

function getInfo() {
    let button = document.getElementById('submit');
    let stopInputValue = document.querySelector('#stopId');
 
    fetch('http://localhost:3000/busInfo')
    button.addEventListener('click', () => {

        console.log(busStops);
        
    });


}