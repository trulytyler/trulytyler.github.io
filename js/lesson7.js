window.onload = function() {
	
	var helloElm = document.getElementById('hello');
helloElm.style.color = 'red';

var campuses = document.getElementById('gaCampuses');
var gaCampuses = campuses.getElementsByTagName('li');

console.log('gaCampuses:', gaCampuses)

for (var index = 0; index<gaCampuses.length; index++) {
	console.log(gaCampuses[index])
	gaCampuses[index].style.color = 'green';
	};
};
window.onload = function() {
	var button = document.getElementById('btn');
	button.onclick = function() {
		event.preventDefault();
		var userInput = document.getElementById('my-input').value;
		console.log(userInput);
	}
}

window.onload = function() {
	
	var mainHeading = document.createElement('h1');
	var headingContent = document.createTextNode('This is the content');
	mainHeading.appendChild
	}
}