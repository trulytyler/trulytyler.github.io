//Homework

//TYLERS SWITCH STMT 
function myFaveDays(daysOfTheWeek) {

var daysOfTheWeek = prompt("like omg! what day is it?");

switch(daysOfTheWeek) {
case 'Monday':
console.log("someones got a case of the mondays");
document.write("mondays are cool");
break;
case 'Tuesday':
console.log("taco tuesday");
document.write("tuesdays are cool");
break;
case 'Wednesday':
console.log ("Ugh....");
document.write("Wednesdays are cool");
break;
case 'Thursday':
console.log ('yay! general assembly day!');
document.write("Thursdays are cool");
break;
case 'Friday':
console.log ('Im gonna eat dinner and sleep so hard tonight!');
document.write("Fridays are cool");
break;
case 'Saturday':
console.log ('YYYEEEZZZZ!!!!1 ITS SATURDAY');
document.write("Saturdays are cool");
break;
case 'Sunday':
console.log ('bed bath and beyond and a glass of orange juice');
document.write("mondays are cool");
break;
default:
document.write("What day are you trying to find? Days must have the first letter capitalized Ex: Sunday, Monday, Tuesday..etc");
}
}


//Notes
var family = [
['michael', 'billy', 'bart'],
['gertrude', 'linda', 'mildred'],
['homer', 'melvin', 'peppep']
];

//the above is a 2 dimensional array with a for loop

for (var index = 0; index<family.length; index++)
//for is the type of loop. index = 0 because it starting at 0. 
//when index is less than the length of the array "family" (is the action)
//index++ means to add one incrementally 
//index/condition/the action to iterate
{ 
	if (index ===1) {
		for (var subIndex=0; subIndex<family[index].length; subIndex++)
		{
			console.log(family[index]);
		}
	}  
}	
//line 14 is explaining that the for loop will only run index #1 (the gertrude area)
//read more 

//ternary operators below

var age = 15;

var allowed = (age > 17) ? 'yes' : 'no';
console.log('allowed:', allowed)
//var NameOfConditional = (the condition) ? 'the true eval' : 'the false eval')



var age2 = 18; {

if ( age >= 18) {
console.log('allowed')
}
else {
	console.log('not allowed')
}

//one bang ! means false if its !! then it means true. 

var name = 'alex'

if (!name) {
	console.log ('name not given')
}
//truthy and falsey - every value can be evaluated to be (boolean) true or false.

//no shoes, no shoes, no service
var isShoes = false;
var isShirt = true;

if (isShoes && isShirt) {
	console.log('you get a burger');
}

//crud apps - C - create | R - Read | U - update | D - Destroy

// roller coaster reqs
var age3 = 14;
var height = 48;

if (age >= 14 || height >= 48) {
	console.log('you can ride');
}
// || means "or" && means "and"

//SWITCH STMT 

var food = "apple"

switch(food) {
	case 'pear':
	console.log("I liek pears");
break;
case 'apple':
    console.log("I like apples");
    break;
    case 'cherimoya':
    console.log ("I like cherimoya")
break;
}
var family = [
['michael', 'billy', 'bart'],
['gertrude', 'linda', 'mildred'],
['homer', 'melvin', 'peppep']
];

//the above is a 2 dimensional array with a for loop

for (var index = 0; index<family.length; index++)
//for is the type of loop. index = 0 because it starting at 0. 
//when index is less than the length of the array "family" (is the action)
//index++ means to add one incrementally 
{ 
	if (index ===1) {
		for (var subIndex=0; subIndex<family[index].length; subIndex++)
		{
			console.log(family[index]);
		}
	}  
}	
//line 14 is explaining that the for loop will only run index #1 (the gertrude area)
//read more 

//ternary operators below

var age = 15;

var allowed = (age > 17) ? 'yes' : 'no';
console.log('allowed:', allowed)
//var NameOfConditional = (the condition) ? 'the true eval' : 'the false eval')


