var luckyForm;
var luckyIndex;
var item;

function draw() {
	luckyForm = document.getElementById("luckyForm");
	luckyIndex = Math.floor(Math.random() * 9);
	item = luckyForm.elements[luckyIndex].value;
	console.log(item);
	document.getElementById("result").innerHTML = "The Winner is: " + item;
}