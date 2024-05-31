var lock = document.getElementById("lockscreen");

var lockerBackground = [
	"https://images3.alphacoders.com/131/1316654.jpeg",
	"https://images5.alphacoders.com/129/1292433.jpg",
	"https://images5.alphacoders.com/134/1345122.jpeg",
	"https://images.alphacoders.com/134/1343095.png",
	"https://images.alphacoders.com/134/1347432.jpeg",
	"https://images8.alphacoders.com/134/1349793.png",
	"https://images3.alphacoders.com/134/1348135.png",
	"https://images5.alphacoders.com/134/1341114.jpeg",
	"https://images8.alphacoders.com/133/1334129.png",
	"https://images3.alphacoders.com/133/1334871.png"
];

window.onload = function (e) {
	function random(arr) {
		var randomer = arr[Math.floor(Math.random() * arr.length)];
		
		return randomer;
	};
	
	var randomic = random(lockerBackground);

	lock.style.background = "url('" + randomic + "')";
	lock.style.backgroundPosition = "center";
	lock.style.backgroundSize = "cover";
	lock.style.backgroundRepeat = "no-repeat";

};

/*-----------------------------------Loading---------------------------*/

window.addEventListener("load", function () {
	var loader = document.getElementById("loader-wrapper");
	loader.style.display = "none";
});
