var weather = prompt("Welcome to the Weather Man, which is me of course. I would like to know, what is the weather right now?");


if (weather == "sunny") {
	document.getElementById("animation").src="//giphy.com/embed/AEy0YJWLIjzSo";
} else if (weather == "rainy") {
	document.getElementById("animation").src="//giphy.com/embed/148x4ezZxvpIeA";
} else if (weather == "windy") {
	document.getElementById("animation").src="//giphy.com/embed/Y8PrJpQ2Q91fy";
} else {
	alert("Try again! This is not a weather I know!")
	document.getElementById("animation").src="//giphy.com/embed/LmFG0Z8cnWXqE"
}

