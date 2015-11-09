var guess1 = prompt("Is my favorite color red?");
guess1 = guess1.toLowerCase();
if(guess1 === "yes" || guess1 === "y") {
	console.log("Guess 1 is: " + guess1);
	alert("You guessed " + guess1 + "! You were right :) My favorite color is red!" );
} else {
	console.log("Guess 1 is: " + guess1);
	alert("You guessed " + guess1 + "! You were wrong :(");
}

var guess2 = prompt("Am I from Seattle?");
guess2 = guess2.toLowerCase();
if(guess2 === "yes" || guess2 === "y") {
	console.log("Guess 2 is: " + guess2);
  alert("You guessed " + guess2 + "! You were right :) I am from Seattle!" );
} else {
	console.log("Guess 2 is: " + guess2);
	alert("You guessed " + guess2 + ". You were wrong :(");
}

var guess3 = prompt("Am I younger than 25?");
guess3 = guess3.toLowerCase();
if(guess3 === "no" || guess3 === "n") {
	console.log("Guess 3 is: " + guess3);
  alert("You guessed " + guess3 + "! You were right :) I am actually 26!");
} else {
	console.log("Guess 3 is: " + guess3);
	alert("You guessed " + guess3 + ". You were wrong :( I am actually 26.");
}