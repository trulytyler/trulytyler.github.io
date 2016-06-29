// function Vehicle (){
// 	console.log(wheels);
// };
// Vehicle.prototype
// Vehicle.prototype.wheels = 2;
// //3 instances of Vehicle
// var truck = new Vehicle();
// var Cooltruck = new Vehicle();
// var supertruck = new Vehicle();

//the constructor below is a function the difference is using the keyword new
// function StreetFighter (){
// };
// //used a constructor to create an object
// var ryu = new StreetFighter();
// //used a constructor to create an object
// StreetFighter {kick = true};
// ryu.prototype.kick = true;
// //the prototype chain!

//the keyword .this refers to context 
//when we create an instamnce of an object the this keyword allows us to add a 
// constructor
// instance property 
// prototype
// inheritance 

// when a constructor is made you create properties that all instances will inherit
// unless they are over written with an instance property. 
//KEY AND PROPERTY ARE SYNONYMOUS



// With a clear understanding of what it looks like to construct a new object, take 10
// minutes to create a constructor function that will allow for two instances and then
// prototype at least one method onto your constructor. If you can't think of an object
// you'd like to use as a model for inheritance make a constructor for a Bird or a Country.


// function TekkenFighter (color){ 
//   this.color = color;
//   this.fighter = 'awesome';
// 	console.log('Lets fight');
// }
// //used a constructor to create an object
// var Nina = new TekkenFighter('red');
// //used a constructor to create an object
// TekkenFighter.prototype.clothes = 'shirts';
// //the prototype chain!
// TekkenFighter.prototype.clothes = 'blue shirt';
// console.log(Nina);

// function Person () {
// 	this.cool = 'cool';
// }
// var tyler = new Person ();

// person.prototype.hello = 'this is me';

// function Person () {}
// var john = new Person ();

// function Person () {}
// var megan = new Person ();

function Person() {}

function Actor(finances) {
    this.finances = finances;
}

function Director() {}

function Producer() {}

var harry = new Actor("bad");
console.log(harry);

Actor.prototype = new Person();
Director.prototype = new Person();
Producer.prototype = new Person();

var eloquent = new Actor();
var bossy = new Producer();
var talkative = new Director();


Actor.prototype.unemployed = function() {
    console.log("no money");
};
Director.prototype.hasbeen = function() {
    console.log("flop");
};
Producer.prototype.noideas = function() {
    consol.log("dried up");
};



