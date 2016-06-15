var messageInput = document.getElementById('messageInput');
var darkTheme = document.getElementById('darkTheme');
var largeText = document.getElementById('largeText');
var messageWindow = document.getElementById('messageWindow');


darkTheme.addEventListener('click', function darkThemeEvent () {
	messageWindow.classList.toggle('darkThemeColors');
});

largeText.addEventListener('click', function largeTextEvent () {
	messageWindow.classList.toggle('largeTextLetters');
});

var xhr = new XMLHttpRequest();
xhr.addEventListener("load", loadedFile)
xhr.addEventListener("failed", failedFile)

xhr.open("GET", "messages.json");

xhr.send();

var preloaded = "";


function loadedFile(){
	preloaded = JSON.parse(xhr.responseText);
	console.log('HELLO', preloaded);
	applyText(preloaded);
	return preloaded;
};

function failedFile(){
	alert("file failed to load");
};

function applyText(object){
	var counter = 0;
	for (var i = 0; i < object.messages.length; i++) {
		var messageCard = `<div class="lightbox" id="mess-${counter}"><h3>${object.messages[i].message}</h3><button id="card-${counter}">Delete</button></div>`;
		messageWindow.innerHTML += messageCard;
		counter++;
	};
};
