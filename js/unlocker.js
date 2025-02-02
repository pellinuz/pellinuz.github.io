var lock = document.getElementById("lockscreen");
var unlocked = document.getElementById("unlocked");
var button = document.getElementById("button");

button.addEventListener("click", function() {
	lock.style.display = "none"
	unlocked.style.display = "flex";
	button.style.display = "none";
});