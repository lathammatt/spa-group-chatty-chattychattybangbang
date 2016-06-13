var Chatty = (function getMessage(newchat){

var xhr = new XMLHttpRequest();

xhr.addEventListener("load", loadedFile)
xhr.addEventListener("failed", failedFile)

xhr.open("GET", "messages.json");

xhr.send();

function loadedFile(){
	console.log("file loaded");
	var firstList = JSON.parse(xhr.responseText);
	// function to apply to DOM;
};

function failedFile(){
	alert("file failed to load");
};
})(Chatty || {});