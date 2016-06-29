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