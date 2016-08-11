function play() {
	console.log("reached function.");
	var form = document.getElementById("rpsForm");
	var userChoice = form.elements[0].value;
	console.log(userChoice);

	var options = ["rock", "paper", "scissors"];

	var computerChoice;

	var randomNumber = Math.floor(Math.random() * 3);

	computerChoice = options[randomNumber];
	console.log(computerChoice);

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
	console.log("finnished function");
}

function playAgain() {
	window.location.reload();
}