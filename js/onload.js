/* lockscreen */

var lock = document.getElementById("lockscreen");

var lockerBackground = [
	"./images/background/1316654.jpg",
	"./images/background/1292433.jpg",
	"./images/background/1345122.jpg",
	"./images/background/1343095.png",
	"./images/background/1347432.jpg",
	"./images/background/1349793.png",
	"./images/background/1348135.png",
	"./images/background/1341114.jpg",
	"./images/background/1334129.png",
	"./images/background/1334871.png",
];

function hideLoader() {
	var loader = document.getElementById("loader-wrapper");
	loader.style.display = "none";
}

/* pfps */

var pfp = document.getElementById("pfpset");
var img = document.createElement("img");

var pfpImg = [
	"./images/pfp/b6e038f009d9787e30d4d8c6631a552c.jpg",
	"./images/pfp/c45234bc8615ef3505c0f831d93be80d.jpg",
	"./images/pfp/12f08a4db7431cfe72b88e2165333e80.jpg"
];

/* loader */

window.onload = function (e) {
	function random(arr) {
		var randomer = arr[Math.floor(Math.random() * arr.length)];
		return randomer;
	};

	var randomBackground = random(lockerBackground);

	var randomPfp = random(pfpImg);

	img.src = randomPfp;
	img.id = "pfp";
	pfp.appendChild(img);

	hideLoader();

	lock.style.background = "url('" + randomBackground + "')";
	lock.style.backgroundPosition = "center";
	lock.style.backgroundSize = "cover";
	lock.style.backgroundRepeat = "no-repeat";
};