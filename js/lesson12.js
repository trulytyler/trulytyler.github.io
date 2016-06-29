// //short hand you can use $.GET or any other http request (you would then delete the pair that says type: GET)
// $.ajax({
// 	url: 'http://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=5235c32894b8b74c4fc70553398ebabc&units=metric',
// 	type: 'GET',
// 	//RESPONSE IS A JSON OBJECT
// 	success: function(response) {
// 		console.log('http://api.openweathermap.org/data/2.5/weather?q=London&appid=5235c32894b8b74c4fc70553398ebabc');
// 		console.log('current temp is' + response.main.temp + 'Celcius');

//     },
// 	error: function() {
// 		console.error('oh no!');
// 	}

// });


//SIGN UP FOR TWITTER OR INSTAGRAM AND GET THERE API KEY AND MESS AROUND
//CREATE AN INPUT SO PEOPLE CAN SEARCH FOR THE WEATHER
//USE ANOTHER "ENDPOINT" OTHER THAN TEMPERATURE

/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

// HOMEWORK

// add handle bars to your this site. compete this assignement. comment the code. (do this over the weekend)
// find a differrent endpoint and ping that. 
// go to another end point. 16 day daily forecast. 
// go to twitter get their API. 
// go to instagram. 
// create an input field in the DOM so a user can search dynamic. 

(function() {

  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
  var apiKey = "810932af7c62935109c4ecafd3fc4738";
  var $CityButton = $('#CityButton');
  var $UserCity = $('#UserCity');
  var $sixteen = $('#sixteen');


$CityButton.on('click', function (event) {
event.preventDefault();
$UserCity = $('#UserCity').val();

$.ajax({
	url: weatherUrl + $UserCity + '?' + '&APPID=' + apiKey,
	type: 'GET',
	success: function (response) {
		var sunset = (response.sys.sunset);
		var sunrise = (response.sys.sunrise);
			//console.log('Sunset: ' + dateSet, timestrSet);
			//console.log('Sunrise: ' + dateSun, timestrSun);


			var $newp = $('<p></p>')
			var $newp2 = $('<p></p>')

			$newp.html('Sunset: ' + $UserCity + ' ' + dateSet);
			$('body').append($newp);

			$newp2.html('Sunrise: ' + $UserCity + ' ' + dateSun);
			$('body').append($newp2);


	},
	error: function () {
		console.error("error")
	}

})

});

$sixteen.on('click', function (event) {
	  event.preventDefault();

  var weatherUrl2 = "http://api.openweathermap.org/data/2.5/forecast/daily?q=SantaMonica&mode=json&units=metric&cnt=7";
  var apiKey = "810932af7c62935109c4ecafd3fc4738";

  $.ajax({
  	url: weatherUrl2 + '&APPID=' + apiKey,
  	type: 'GET',
  	success: function (response){
  		for(i=0; i < response.list.length; i++){

  			console.log(response.list[i]);
  		}

  	},
  	error: function () {
  		console.error('error')
  	}

  })

 });



})();