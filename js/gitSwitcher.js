//TYLERS SWITCH STMT 

var daysOfTheWeek = prompt("like omg! what day is it?");

switch(daysOfTheWeek) {
    case 'Monday':
        console.log("someones got a case of the mondays");
        document.getElementById("daytext").innerHTML = 'someones got a case of the mondays';
    break;
    case 'Tuesday':
        console.log("taco tuesday");
        document.getElementById("daytext").innerHTML = 'Tuesdays are great cause tacos!';
    break;
    case 'Wednesday':
        console.log ("Ugh....");
        document.getElementById("daytext").innerHTML = 'Ugh...dont get me started';
    break;
    case 'Thursday':
        console.log ('yay! general assembly day!');
         document.getElementById("daytext").innerHTML = 'yay! General assembly javascript fun time!!';
    break;
    case 'Friday':
        console.log ('Im gonna eat dinner and sleep so hard tonight!');
        document.getElementById("daytext").innerHTML = 'Im gonna eat dinner and sleep so hard tonight!';
    break;
    case 'Saturday':
        console.log ('YYYEEEZZZZ!!!!1 ITS SATURDAY');
        document.getElementById("daytext").innerHTML = 'YYYEEEZZZZ!!!!1 ITS SATURDAY';
    break;
    case 'Sunday':
        console.log ('bed bath and beyond and a glass of orange juice');
        document.getElementById("daytext").innerHTML = 'bed bath and beyond and a glass of orange juice';
    break;
    default:
        document.getElementById("daytext").innerHTML = 'What day are you trying to find? Days must have the first letter capitalized Ex: Sunday, Monday, Tuesday..etc';

}



