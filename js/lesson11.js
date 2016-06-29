//creating an http request http://www.w3schools.com/xml/dom_httprequest.asp?
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	console.log("whats up");
};
xhttp.open('GET', 'http://data.consumerfinance.gov/api/views.json');
xhttp.send();


