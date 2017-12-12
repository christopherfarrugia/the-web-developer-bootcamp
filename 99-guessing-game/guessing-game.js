// create secret number
var secretNumber = 7;

// ask user for guessing
var guess = Number(prompt("Guess a number"));

// check guess

if (guess === secretNumber) {
  alert("You got it right!");
}

else if (guess < secretNumber) {
  alert("Too low");
}

else if (guess > secretNumber) {
  alert("Too high");
}
