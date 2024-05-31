var lock = document.getElementById("lockscreen");
var unlocked = document.getElementById("unlocked");
const button = document.getElementById("button");

function unlock() {
	lock.style.display = "none"
	unlocked.style.display = "flex";
	button.style.display= "none";
};