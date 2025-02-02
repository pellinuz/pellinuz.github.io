var input = document.getElementById("password");
var sendBtn = document.getElementById("sendBtn");

function password() {
	console.log("yes");
	if (input.value == ""){
		alert("The input field is empty")
	} else if (input.value == "password") {
		window.location.href = "https://bit.ly/GUIDAREGOLE";
	} else if (input.value == "grest") {
		window.location.href = "https://pellinuz.github.io/grest";
	} else if (input.value == "api") {
		window.location.href = "https://github.com/pellinuz/Example-API";
	} else if (input.value == "message") {
		window.location.href = "https://pellinuz.github.io/Message";
	} else if (input.value == "instagram") {
		window.location.href = "https://instagram.com/pellinuz_";
	} else if (input.value == "twitch") {
		window.location.href = "https://twitch.tv/pellinuz";
	} else if (input.value == "github") {
		window.location.href = "https://github.com/pellinuz";
	} else if (input.value == "rep" || input.value == "repository") {
		window.location.href = "https://github.com/pellinuz/pellinuz.github.io";
	} else {
		alert("The password is not correct!");
		input.value = "";
	}
}

function send() {
	password();
}

input.addEventListener('keydown', function (event) {
	if (event.key == 'Enter') {
		password();
	}
});