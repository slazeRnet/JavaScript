//function for removing elements by id
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
//Get Weather
async function getWeatherByLocationCode(locationName){
let url = `https://locations-ff0f9.firebaseio.com/locations.json`;
let locationsArray = [];

//store the DB locations in array
await fetch(url)
.then(arr => arr.json())
.then(arr => {
    locationsArray = arr;
})
    //iterate through the array of locations
    for (const location of locationsArray) {
        if(location.name.toLowerCase() === locationName.toLowerCase()){
            
            let today =   await forecast(location.code, 'today');
            let upcoming =  await forecast(location.code, 'upcoming');
    
             await appendForecast(today, 'today')
            .then(appendForecast(upcoming, 'upcoming'));
            
        }
    }



}

// GET request from the database forecast (for today or upcoming)
 async function forecast(code, time){
    let url;
    if(time === 'today'){
        url = `https://locations-ff0f9.firebaseio.com/forecast/today/${code}.json`;
    }
    else if (time === 'upcoming'){
        url = `https://locations-ff0f9.firebaseio.com/forecast/upcoming/${code}.json`;
    }
    let forecast;

     await fetch(url)
    .then(arr => arr.json())
    .then(arr => {
        forecast = arr;
    });
    
    return forecast;
}

async function appendForecast(obj, time){
    //unhide
    displayForecastDiv();
    
    let current = await document.getElementById('current');
    let upcoming = await document.getElementById('upcoming');
    
    if(time.toLowerCase() == 'today'){
 
         //clear field
         let clear = (() => {
            return new Promise((resolve, reject) => {
                resolve(clearTodayForecast());
            });
         }) ();
         await clear.then(() => {

             //append forecast for current
            let div = document.createElement('div');
            div.setAttribute('class', 'forecasts');
            let symbol = document.createElement('span');
            symbol.setAttribute('class', 'condition symbol');
            let condition = document.createElement('span');
            condition.setAttribute('class', 'condition');
            let forecastData1 = document.createElement('span');
            let forecastData2 = document.createElement('span');
            let forecastData3 = document.createElement('span');
            forecastData1.setAttribute('class', 'forecast-data');
            forecastData2.setAttribute('class', 'forecast-data');
            forecastData3.setAttribute('class', 'forecast-data');
    
            symbol.innerHTML = weatherCondtionSymbol(obj.forecast.condition);
            forecastData1.innerHTML = obj.name;
            let degreesSymbol =  weatherCondtionSymbol('degrees');
            forecastData2.innerHTML = `${obj.forecast.low}${degreesSymbol}/${obj.forecast.high}${degreesSymbol}`;
            forecastData3.innerHTML = obj.forecast.condition;
    
            div.appendChild(symbol);
            condition.appendChild(forecastData1);
            condition.appendChild(forecastData2);
            condition.appendChild(forecastData3);
            div.appendChild(condition);
            current.appendChild(div);
             
         });
    }

    else if(time.toLowerCase() == 'upcoming'){
        //clear field
        let clear = (() => {
            return new Promise((resolve) => {
                resolve(clearUpcomingForecast());
            });
         }) ();
        await clear.then(() => {

            //append forecast to current
            let forecastInfo = document.createElement('div');
            forecastInfo.setAttribute('class', 'forecast-info');
            if(obj.forecast)
            for (const forecastObject of obj.forecast) {
                
                let upcomingSpan = document.createElement('span');
                upcomingSpan.setAttribute('class', 'upcoming');
                let symbol = document.createElement('span');
                symbol.setAttribute('class', 'symbol')
                let forecastData1 = document.createElement('span');
                let forecastData2 = document.createElement('span');
                forecastData1.setAttribute('class', 'forecast-data');
                forecastData2.setAttribute('class', 'forecast-data');
                //set the values to the elements
                symbol.innerHTML = weatherCondtionSymbol(forecastObject.condition);
                
                let degreesSymbol = weatherCondtionSymbol('degrees');
                forecastData1.innerHTML = `${forecastObject.low}${degreesSymbol}/${forecastObject.high}${degreesSymbol}`;
                forecastData2.innerHTML = forecastObject.condition;
                //append elements to the div
                upcomingSpan.appendChild(symbol);
                upcomingSpan.appendChild(forecastData1);
                upcomingSpan.appendChild(forecastData2);
                forecastInfo.appendChild(upcomingSpan);
                upcoming.appendChild(forecastInfo);

            }
        });

            

    }
}

//return a UTF-8 symbol based on given weather
function weatherCondtionSymbol(condition){
if(condition.toLowerCase() === 'sunny'){
    return '&#x2600;';
}
if(condition.toLowerCase() === 'partly sunny'){
    return '&#x26C5;';
}
if(condition.toLowerCase() === 'overcast'){
    return '&#x2601;';
}
if(condition.toLowerCase() === 'rain'){
    return '&#x2614;';
}
if(condition.toLowerCase() === 'degrees'){
    return '&#176;';
}else {
    console.error(`weatherCondtionSymbol(${condition}):Unknown condition symbol!`);
    
}
}

// unhides the forecast div
function displayForecastDiv(){
    let forecast = document.getElementById('forecast');
    forecast.removeAttribute('style');
}

//remove current forecast elements
async function clearTodayForecast(){
    let current = await document.querySelector('body #content #forecast #current .forecasts');
    if(current){
        console.log(current);
        current.remove();
    }
}

//remove upcoming forecast elements
async function clearUpcomingForecast(){
    let upcoming = await document.querySelector('body #content #forecast #upcoming .forecast-info');
            if(upcoming){
                console.log(upcoming);
              upcoming.remove();
            }
}

//Main function
function attachEvents() {
    let getWeather = document.getElementById('submit');
    let locationName = document.getElementById('location').value;

    getWeather.addEventListener('click', () =>{
        getWeatherByLocationCode(locationName);
    });
}

attachEvents();