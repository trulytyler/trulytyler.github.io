//dice app
document.getElementById("roll-dice").addEventListener("click", function(){
	var random1 = Math.floor((Math.random() * 6) + 1);
	var random2 = Math.floor((Math.random() * 6) + 1);
	console.log(random1);
	console.log(random2);
	var firstDie = 'dice-' + random1;
	var secondDie = 'dice-' + random2;
	console.log(firstDie);
	console.log(secondDie);
	document.getElementById("second-die").className = secondDie;
	document.getElementById("first-die").className = firstDie;
});


//function declaration
console.log('connected!');

var speak = function(words, anotherWord) {
	console.log(words);
    console.log(anotherWord);

};

speak('arf arf arf', 'meow', 'meow', 'meow');


function addition(num1, num2) {
	console.log(num1 + num2)
}

addition(6, 3);

function dafuq(something, num2, num1, yourcool) {
	console.log(something % num2 * num1 / yourcool )
}

dafuq(200, 3, 45, .750000);

function isMenuHidden() {
	//true or false???
};
function setUpView() {
	//show menu
	if (isMenuHidden()){
		//then do something
	} 
};

//LIKE OMG METHODS!!!! AHHHHHHHHHHHHH! diff: a method is a function defined upon an object
//functions are not methods methods are functions applied to objects
speak();
person.speak();

var person = {
	name: 'Zach',
	speak: function() {
		console.log('Do you guys like salad');
	}
}
console.log(typeof(person));
//person speak 



