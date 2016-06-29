//short hand you can use $.GET or any other http request (you would then delete the pair that says type: GET)


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

// add handle bars to this site. compete this assignement. comment the code. (do this over the weekend)
// find a differrent endpoint and ping that. 
// go to another end point. 16 day daily forecast. 
// go to twitter get their API. 
// go to instagram. 
// create an input field in the DOM so a user can search dynamic. 

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


// Define a function max() that takes two numbers as arguments and returns 
// the largest of them. Use the if-then-else construct available in Javascript.


//returns the largest number
function max(larger, smaller) {
	var larger = 5;
var smaller = 2;
		if (larger > smaller) {
    // block of code to be executed if the condition is true
        console.log(larger);
          return larger;

} else { 
      console.log(smaller);
       return smaller;

}
}
max();

// Create a handle bars template that writes an h1 to the dom


// reference
// var source = $('#theTitle').html();

// //compile the source market 
// var template = Handlebars.compile(source);

// // pass the object to 
// var blogData = {
// 	title: 'what did i eat for lunch',
// 	post: 'I ate pizza'};


// var fullTemplate = template(blogData);

// $('body').append(fullTemplate);


//http request with jquery/ajax SUCCESSFUL CONNECTION
// $.ajax({
// 	url: 'http://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=5235c32894b8b74c4fc70553398ebabc&units=metric',
// 	type: 'GET',
// 	success: function (data) {
// //run your code here
// 	 console.log('yay!'); },
//     error: function () { console.error('oh no!');
 
//     }
// });


$cityButton = $('#CityButton');



$cityButton.on('click', function (event) {
event.preventDefault();
$userCity = $('#UserCity').val();


var City = function() {
$.ajax({
	url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $userCity + '&appid=5235c32894b8b74c4fc70553398ebabc&units=imperial',
	type: 'GET',
	success: function info(response) {
		var temp = (response.main.temp);
//run your code here
	 console.log('http://api.openweathermap.org/data/2.5/weather?q=' + $userCity + '&appid=5235c32894b8b74c4fc70553398ebabc&units=imperial'); 
     console.log('current temp is' + temp + 'fahrenheit'); 
    
	 $('#list').append('<li>the temperature in' + ' ' + $userCity + ' ' + 'is' + ' ' + temp + ' ' + 'fahrenheit</li>');
	},
   
//this is the message when its wrong
    error: function () { console.error('oh no!');
 
    }
});
};
City();
});





// create a function that when CityButton is clicked it appends the value of userCity2
//create a statement that appends the data to body

//the part where the adding occurs



