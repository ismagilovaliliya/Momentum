const COORDS_LS = 'coords';
const API_KEY = '5844dc6057f49941d34e7e06abbf8138';

const weatherContainer = document.querySelector('.js-weather');

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            weatherContainer.innerText = `${temperature} @ ${place}`;
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