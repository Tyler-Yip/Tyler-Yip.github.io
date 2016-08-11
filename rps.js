function play() {

	var userChoice = document.getElementById("rpsForm").elements[0].value;

	var options = ["rock", "paper", "scissors"];

	var computerChoice;

	var randomNumber = Math.floor(Math.random() * 3);

	computerChoice = options[randomNumber];

	if (userChoice == computerChoice) {
		//document.getElementById("result").innerHTML = "It's a tie!";

	} else if (userChoice == "rock" && computerChoice == "scissors") {
		//document.getElementById("result").innerHTML = "You win!";
		alert("You Win!");
	} else if (userChoice == "rock" && computerChoice == "paper") {
		//document.getElementById("result").innerHTML = "computer wins!";
		alert("Computer Wins!");
	} else if (userChoice == "paper" && computerChoice == "rock") {
		//document.getElementById("result").innerHTML = "You win!";
		alert("You Win!");
	} else if (userChoice == "paper" && computerChoice == "scissors") {
		//document.getElementById("result").innerHTML = "computer wins!";
		alert("Computer Wins!");
	} else if (userChoice == "scissors" && computerChoice == "paper") {
		//document.getElementById("result").innerHTML = "You wins!";
		alert("You Win!");
	} else if (userChoice == "scissors" && computerChoice == "rock") {
		//document.getElementById("result").innerHTML = "computer wins!";
		alert("Computer Wins!");
	} else {
		alert("Invalid Input!");
	}
}

function playAgain() {
	window.location.reload();
}