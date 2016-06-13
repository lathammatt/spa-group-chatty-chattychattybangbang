var Chatty = (function getMessage(newchat){

var xhr = new XMLHttpRequest();

xhr.addEventListener("load", loadedFile)
xhr.addEventListener("failed", failedFile)

xhr.open("GET", "messages.json");

xhr.send();

function loadedFile(){
	console.log("file loaded");
	var preloaded = JSON.parse(xhr.responseText);
	applyText(preloaded)
};

function failedFile(){
	alert("file failed to load");
};

function applyText(object, array){
	var counter = 0, messageCard;
	for (var i = 0; i < object.length; i++) {
		messageCard = `<div class="lightbox"><h3>${object.messages[i].message}</h3><button id="card-${counter}">Delete</button></div>`;
		// output.innerHTML += messageCard;
		counter++;
	};
};	


})(Chatty || {});

