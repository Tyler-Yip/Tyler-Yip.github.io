var userChoice = prompt("Welcome to rock paper and scissors! What would you like to chose?");

var options = ["rock", "paper", "scissors"];

var computerChoice;

var randomNumber = Math.floor(Math.random() * 3);

computerChoice = options[randomNumber];

if (userChoice == computerChoice) {
	document.getElementById("result").innerHTML = "It's a tie!";
} else if (userChoice == "rock" && computerChoice == "scissors") {
	document.getElementById("result").innerHTML = "You win!";
} else if (userChoice == "rock" && computerChoice == "paper") {
	document.getElementById("result").innerHTML = "computer wins!";
} else if (userChoice == "paper" && computerChoice == "rock") {
	document.getElementById("result").innerHTML = "You win!";
} else if (userChoice == "paper" && computerChoice == "scissors") {
	document.getElementById("result").innerHTML = "computer wins!";
} else if (userChoice == "scissors" && computerChoice == "paper") {
	document.getElementById("result").innerHTML = "You wins!";
} else if (userChoice == "scissors" && computerChoice == "rock") {
	document.getElementById("result").innerHTML = "computer wins!";
} else {
	alert("Invalid Input!");
}