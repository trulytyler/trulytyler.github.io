var lesson6 = 'awesome'
console.log(lesson6);

/*function(parameter){argument}
we use functions to keep our code "Dry" which stands for don't repeat yourself 
ex: function(num){
	console.log(num)
}
function expression
var speak = function(words, anotherWord) {
	console.log(words);
    console.log(anotherWord);

};

function declaration
function add(a+b){
	(a+b)
}
 if you put "add ()"" open parenthesis around the function it will auto invoke it. without calling it.
self invoking functions!
you don't need to give a function a name if you only need to use it once. 
you can place it in your code and self invoke it. 

the main difference between declaration and expression. is how you can execute them. 
*/

// learning objectives!!
// -Return
// -Scope
// -objects
// -JSON

//cmd tab is cool cause you can pic whatever app you want
//also cmd / will comment your code if you highlight in sublime text
//high order function! look it up

function sum(x, y) {
	return x + y;
}
var sumValue = sum(6,3)
console.log(sumValue);
//

function sumOf(num1, num2) {
	if (typeof(num1) !== 'number'){
		return;
}
console.log(num1 + num2);
return num1 + num2;
}
sum(2,3);

//look up early returns
//avoid callback hell by keeping your code modular 
//if you define a variable within a function that variable is a "local variable"
//and can only be used in the function
//GLOBAL SCOPE
//LOCAL SCOPE
//SCOPE DEALS WITH ACCESSABILITY TO VARIABLE VALUES,not saying its not there just how acessable. 
//http://www.w3schools.com/js/js_scope.asp



/*var a = 'this is the global scope';

function myfunction() {
	var a = 'this is a local scope variable';
console.log(a);

}

myfunction();
console.log(a);*/


//global scoped variable is most commonly an element 
//when you have a global scope variable to maybe capture a button. 

var a = 1;

function getScore() {
	var b = 2;
	var c = 3;
	function add() {
		return a + b + c;
	}
	console.log(add());
}

getScore();

//closure ='s atleast one function inside of another function. they are hidden from the outside world.

function legshaker() {
	var thatguy = 1;
	var tyler = 10;
	
	if (thatguy < tyler) {
    console.log('stab leg');
} else {
    console.log('dont stab');
}

}
legshaker();



// key value pair

var tylersBus ={
	wheels:2,
	color: 'black',
	maxSpeed: 150,
	owners: ['tyler', 'brandon']
}

for (var key in tylersBus); {
	console.log(tylersBus[key]);
}
//LETS GET THIS PARTY STARTED

var shoes = [
	{brand: 'nike', price: 4.59, size: 7},
	{brand: 'adidas', price: 9.99, size: 11}
];

var user = {
	size: 12,
	budget: 20,
	findShoes: function(shoes) {
		for (var i=0; i<shoes.length; i++) {
			if (shoes[i].size === 12 && shoe[i].price <= 20)
			console.log(shoes[i])
			console.log('Im going to buy the ' + shoes [i].brand);

		}
	}

};

user.findShoes(shoes);




