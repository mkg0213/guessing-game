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

var guess4 = prompt("Do I have a brother?");
guess4 = guess4.toLowerCase();
if(guess4 === "no" || guess4 === "n") {
	console.log("Guess 4 is: " + guess4);
  alert("You guessed " + guess4 + "! You were right :) I do not have a brother, I actually have a sister!");
} else {
	console.log("Guess 4 is: " + guess4);
	alert("You guessed " + guess4 + ". You were wrong :( I do not have a brother, I actually have a sister!");
}

var guess5 = prompt("Do I like Game of Thrones?");
guess5 = guess5.toLowerCase();
if(guess5 === "yes" || guess5 === "y") {
	console.log("Guess 5 is: " + guess5);
  alert("You guessed " + guess5 + "! You were right :) I LOVE Game of Thrones!");
} else {
	console.log("Guess 5 is: " + guess5);
	alert("You guessed " + guess5 + ". You were wrong :( I LOVE Game of Thrones!");
}

var rating = prompt("How much did you enjoy this game on a scale from 1-10");
if(0 < rating && rating < 11) {
	console.log("Rating is a valid value.");
	if(rating > 5) {
		console.log("Rating was " + rating + ".");
		alert("You rated the game " + rating + ". I'm glad you liked the game!");
	} else {
		console.log("Rating was " + rating + ".");
		alert("You rated the game " + rating + ". I'm sorry you didn't like the game!");
	}
} else {
	console.log("Rating is not a valid value.");
	alert("Your rating was not a valid value!");
}