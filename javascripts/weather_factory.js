console.log("weather_factory.js");




$(document).ready(function() {


// Ajax call for current data

window.callTodayForecast = function (zipCode, unitType) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: `api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&APPID=9b42fc4762bdfd3ef485137a7b88f268&units=${unitType}`
		}).done((weatherData) => {
			resolve(weatherData);
		}).fail((error) => {
			reject(error);
		});
	});
}

// &APPID=9b42fc4762bdfd3ef485137a7b88f268&units=${unitType}

// api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&APPID=9b42fc4762bdfd3ef485137a7b88f268&units=${unitType}


// Ajax call for 5-day weather data

window.callFiveDayForecast = function (zipCode, unitType) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: `api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&APPID=9b42fc4762bdfd3ef485137a7b88f268&units=${unitType}`
		}).done((weatherData) => {
			resolve(weatherData);
		}).fail((error) => {
			reject(error);
		});
	});
}



// Ajax call for 16-day weather data

window.callSixteenDayForecast = function (zipCode, unitType) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: `api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&APPID=9b42fc4762bdfd3ef485137a7b88f268&units=${unitType}`
		}).done((weatherData) => {
			resolve(weatherData);
		}).fail((error) => {
			reject(error);
		});
	});
}



});