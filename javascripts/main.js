console.log("main.js");


$(document).ready(function() {



// Event listeners for button click or return keypress
$("#submit-btn").click((event) => {
	console.log("click:", event);
	let zipCode = $("#zip-input").val();
	console.log("zipCode:", zipCode);

	console.log("checkZipCode(zipCode)", checkZipCode(zipCode));

	// $("#zip-input").val("");

	// printNotice();

	getDailyForecast(checkZipCode(zipCode), unitType);
});



$("#zip-input").keyup((event) => {
	if (event.which === 13) {
		console.log("return pressed");
		let zipCode = $("#zip-input").val();
		console.log("zipCode:", zipCode);

		console.log("checkZipCode(zipCode)", checkZipCode(zipCode));
		// printNotice();

		// $("#zip-input").val("");

		getDailyForecast(checkZipCode(zipCode), unitType);
	}
});


let checkZipCode = function (zipCode) {
	if (/^[0-9]{5}$/.test(zipCode)) {
		$("#zip-input").val("");
		return zipCode
	} else {
		$("#zip-input").val("");
		alert("Please enter a 5-digit zip code");
	}
}


function getDailyForecast(zipCode, unitType) {

	if (zipCode) {

		callTodayForecast(zipCode, unitType)
		.then((weatherData) => {

		});

	}
}





});