async function getWeatherByLocationCode(locationName){
let url = `https://locations-ff0f9.firebaseio.com/locations.json`;
let locationsArray = [];

await fetch(url)
.then(arr => arr.json())
.then(arr => {
    locationsArray = arr;
});

for (const location of locationsArray) {
    if(location.name.toLowerCase() === locationName.toLowerCase()){

        let today = await forecast(location.code, 'today');
        let upcoming = await forecast(location.code, 'upcoming');

        console.log(today);
        console.log(upcoming);
        
    }
}

}

 async function forecast(code, time){
    let url;
    if(time === 'today'){
        url = `https://locations-ff0f9.firebaseio.com/forecast/today/${code}.json `;
    }
    else if (time === 'upcoming'){
        url = `https://locations-ff0f9.firebaseio.com/forecast/upcoming/${code}.json `;
    }
    let forecast;

     await fetch(url)
    .then(arr => arr.json())
    .then(arr => {
        forecast = arr;
        console.log(arr);
        
    });
    console.log(forecast);
    
    return forecast;
}

function attachEvents() {
    let getWeather = document.getElementById('submit');
    let locationName = document.getElementById('location').value;

    getWeather.addEventListener('click', () =>{
        getWeatherByLocationCode(locationName);
    });
}

attachEvents();