const COORDS_LS = 'coords';
const API_KEY = '5844dc6057f49941d34e7e06abbf8138';

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');

async function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
        .then(function(response){
            return response.json();
        })
        .then(function(json){
			console.log(json);
			city.textContent = json.name;
			weatherIcon.classList.add(`owf-${json.weather[0].id}`);
			temperature.textContent = `${json.main.temp}°C`;
			weatherDescription.textContent = json.weather[0].description;
			wind.textContent = `Wind speed: ${json.wind.speed} m/s`; 
			humidity.textContent = `Humidity: ${json.main.humidity}%`; 
        });
}

function saveCoords(positionObj){
	 localStorage.setItem(COORDS_LS, JSON.stringify(positionObj));
}

function geoSuccessHandler(positon){
	const latitude = positon.coords.latitude;
	const longitude = positon.coords.longitude;
	const positionObj = {
		latitude,
		longitude
	}

	console.log("positionObj ", positionObj);

	saveCoords(positionObj);
	getWeather(latitude, longitude);
}

function geoErrorHandler(){
	console.log('Ошибка определения геопозиции');
}

function askForCords(){
    navigator.geolocation.getCurrentPosition(geoSuccessHandler, geoErrorHandler);
}

function getCoords(){
	const coords = localStorage.getItem(COORDS_LS);

	if (coords === null){
		askForCords();
	}else{
		const loadedCoords = JSON.parse(coords);
		getWeather(loadedCoords.latitude, loadedCoords.longitude);
	}
}

function init(){
	getCoords();
}

init();