const apiId = 'a09b9a0de48c45b63a70454f0000db8e';
const measurements = 'imperial';
let searchMethod;
let lon;
let lat;

const today = new Date();
const date = (today.getMonth()+1) + '-' + today.getDate() + '-' + today.getFullYear()         
// today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date+' '+time;
// console.log(date+' '+time)


function getSearchMethod(searchTerm) {
    if (searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm) {
        searchMethod = 'zip';
    } else {
        searchMethod = 'q';
    }

}

function searchWeather (searchTerm) {
    getSearchMethod(searchTerm);
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${apiId}&units=${measurements}`).then(result => {
        return result.json()
    }).then(result => {
        Init(result)
    })
}

function fiveDayWeather (searchTerm) {
    getSearchMethod(searchTerm)
    fetch(`http://api.openweathermap.org/data/2.5/forecast?${searchMethod}=${searchTerm}&APPID=${apiId}&units=${measurements}`).then(result => {
        return result.json()
    }).then(result => {
        fiveDayInit(result)
    })
}

// function searchUv (searchTerm) {
//     getSearchMethod(searchTerm)
//     fetch(`https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiId}`).then(result => {
//         return result
//     }).then(result => {
//         uvInit(result)
//     })
// console.log()
// }

// const getIndexVal = function(lon, lat)
// {
//   fetch (`https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=7f517c5b35eadcb0d489ee411ba832f4`).then(
//       data => data.json()
       
//     ).then( dataJson => {
//      var uvValue = dataJson['value'];
//       document.querySelector('#uvIndex').textContent = uvValue;
    
//     }
//     )
// }





// function uvInit (uvFromServer) {
//   const results = uvFromServer

//     // lat = results.coord.lat

//     // console.log(lat)
//     // console.log(uvFromServer)
// }

//function for 5 day forecast
function fiveDayInit (fiveDayFromServer) {
    // console.log(fiveDayFromServer)
    
const results = fiveDayFromServer
// console.log(results.list[4].main.temp)  
    // console.log(results)
const futureCityHeader = document.querySelector('#future-header-one')
const futureCityHeader2 = document.querySelector('#future-header-two')
const futureCityHeader3 = document.querySelector('#future-header-three')
const futureCityHeader4 = document.querySelector('#future-header-four')
const futureCityHeader5 = document.querySelector('#future-header-five')


futureCityHeader.textContent = results.city.name
futureCityHeader2.textContent = results.city.name
futureCityHeader3.textContent = results.city.name
futureCityHeader4.textContent = results.city.name
futureCityHeader5.textContent = results.city.name


const futureWeatherDescription = document.querySelector('#weather-description-one')
const futureWeatherDescription2 = document.querySelector('#weather-description-two')
const futureWeatherDescription3 = document.querySelector('#weather-description-three')
const futureWeatherDescription4 = document.querySelector('#weather-description-four')
const futureWeatherDescription5 = document.querySelector('#weather-description-five')


futureWeatherDescription.textContent = 'Weather Conditions: ' + results.list[4].weather[0].main
futureWeatherDescription2.textContent = 'Weather Conditions: ' + results.list[12].weather[0].main
futureWeatherDescription3.textContent = 'Weather Conditions: ' + results.list[20].weather[0].main
futureWeatherDescription4.textContent = 'Weather Conditions: ' + results.list[28].weather[0].main
futureWeatherDescription5.textContent = 'Weather Conditions: ' + results.list[36].weather[0].main


const futureTemp = document.querySelector('#future-temp-one')
const futureTemp2 = document.querySelector('#future-temp-two')
const futureTemp3 = document.querySelector('#future-temp-three')
const futureTemp4 = document.querySelector('#future-temp-four')
const futureTemp5 = document.querySelector('#future-temp-five')


futureTemp.textContent = 'Temperature: ' + Math.round(results.list[4].main.temp) + ' F'
futureTemp2.textContent = 'Temperature: ' + Math.round(results.list[12].main.temp) + ' F'
futureTemp3.textContent = 'Temperature: ' + Math.round(results.list[20].main.temp) + ' F'
futureTemp4.textContent = 'Temperature: ' + Math.round(results.list[28].main.temp) + ' F'
futureTemp5.textContent = 'Temperature: ' + Math.round(results.list[36].main.temp) + ' F'


const futureWindSpeed = document.querySelector('#future-windspeed-one')
const futureWindSpeed2 = document.querySelector('#future-windspeed-two')
const futureWindSpeed3 = document.querySelector('#future-windspeed-three')
const futureWindSpeed4 = document.querySelector('#future-windspeed-four')
const futureWindSpeed5 = document.querySelector('#future-windspeed-five')


futureWindSpeed.textContent = 'Wind Speed: ' + Math.round(results.list[4].wind.speed) + ' m/s'
futureWindSpeed2.textContent = 'Wind Speed: ' + Math.round(results.list[12].wind.speed) + ' m/s'
futureWindSpeed3.textContent = 'Wind Speed: ' + Math.round(results.list[20].wind.speed) + ' m/s'
futureWindSpeed4.textContent = 'Wind Speed: ' + Math.round(results.list[28].wind.speed) + ' m/s'
futureWindSpeed5.textContent = 'Wind Speed: ' + Math.round(results.list[36].wind.speed) + ' m/s'


const futureHumidity = document.querySelector('#future-humidity-one')
const futureHumidity2 = document.querySelector('#future-humidity-two')
const futureHumidity3 = document.querySelector('#future-humidity-three')
const futureHumidity4 = document.querySelector('#future-humidity-four')
const futureHumidity5 = document.querySelector('#future-humidity-five')


futureHumidity.textContent = 'Humidity level: ' + Math.round(results.list[4].main.humidity) + '%'
futureHumidity2.textContent = 'Humidity level: ' + Math.round(results.list[12].main.humidity) + '%'
futureHumidity3.textContent = 'Humidity level: ' + Math.round(results.list[20].main.humidity) + '%'
futureHumidity4.textContent = 'Humidity level: ' + Math.round(results.list[28].main.humidity) + '%'
futureHumidity5.textContent = 'Humidity level: ' + Math.round(results.list[36].main.humidity) + '%'
// console.log(futureCityHeader)
// console.log(futureWeatherDescription)
      
}

// function for current weather forecast
function Init(fromServer) {
// console.log(fromServer)   
// brings in all the different html elements needed to display the weather conditions
const weatherContainer = document.querySelector('#weather-container')
const weatherDescription = document.querySelector('#weather-description')
const cityHeader = document.querySelector('#city-header')
const weatherMain = document.querySelector('#weather-main')
const weatherTemp = document.querySelector('#weather-temp')
const weatherDescriptionHeader = document.querySelector('#weather-description-header')
const windSpeed = document.querySelector('#wind-speed')
const humidity = document.querySelector('#humidity')
const uvIndex = document.querySelector('#uv-index')
const currentDate = document.querySelector('#date')

const results = fromServer.weather[0].description
// sets all the different measurements as well as the name of the city in which the weather is being displayed for
cityHeader.textContent = fromServer.name

weatherDescriptionHeader.innerHTML = 'Current weather conditions: ' + results.charAt(0).toUpperCase() + results.slice(1)

weatherTemp.textContent = 'Current temperature: ' + Math.round(fromServer.main.temp)  + ' F'

windSpeed.textContent = 'Wind speed: ' + Math.round(fromServer.wind.speed) + ' m/s'

humidity.textContent = 'Humidity level: ' + Math.round(fromServer.main.humidity) + '%'

currentDate.textContent = date

 


}

 
// adds event listener to search button to run the searchWeather function when it is clicked
document.querySelector('#search-btn').addEventListener('click', function() {
    let searchTerm = document.querySelector('#search-input').value
    if (searchTerm) {
        searchWeather(searchTerm)
        fiveDayWeather(searchTerm)
        // getIndexVal(searchTerm)
        // searchUv(searchTerm)

    }

})
