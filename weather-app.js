// 29ca562ee996ef4c
// start with an empty weatherWidget object, that is where all of the code goes, it is emptry to make sure everything is global, this helps code to be organized 

var weatherWidget = {
};

// where we store where all of the weather api is located, so it can be unsed multiple time 
weatherWidget.apiUrl = "http://api.wunderground.com/api/29ca562ee996ef4c/conditions/q/CANADA/Toronto.json";

console.log(weatherWidget);
// calls the other methods, but this is the initialization--- calls the method getdata, then getdata links to display data
weatherWidget.init = function() {
	// This code in here is used to initialize out application
	weatherWidget.getData();

	};

// When the page loads get data
// Make an AJAX call to the wondergrounds API
// When the data returns we want to display specific things (found on the html page)


// make the call to $ajax-- ajax calls the api function, url, stored in property, pass into then a callback function, made a new variable called observation which is storing the part of the data that we use a lot, and then link it to the displayWeather functiom

weatherWidget.getData = function() {

$.ajax({
	url: weatherWidget.apiUrl,
	method:'GET',
	dataType: 'json',
})
.then(function(weatherData){
	var observation = weatherData.current_observation;
	weatherWidget.displayWeather(observation);
});
};

// make the variables that held the data we were looking for from the API, then since this is the display section of the code, we can display the data in the HTML, using .text, will alter the text in the HTML document, .attr can be used to target the image section


weatherWidget.displayWeather = function(weather) {
	console.log(weather);

	var city = weather.display_location.city;
	$('.city_name').text(city);
	var temp_c = weather.dewpoint_c;
	$('.temp_c').text(temp_c);
	var time = weather.local_time_rfc822;
	$('.date_time').text(time);
	var condition = weather.weather;
	$('.weather_string').text(condition);
	var image = weather.icon_url;
	$('.weather_image').attr('src',image);
};


$(document).ready(function(){
  weatherWidget.init();
});