$(document).ready(function () {
var messageInput = document.getElementById('messageInput');
// var darkTheme = $("#darkTheme");
// var largeText = document.getElementById('largeText');
var messageWindow = document.getElementById('messageWindow');


// darkTheme.addEventListener('click', function darkThemeEvent () {
// 	messageWindow.classList.toggle('darkThemeColors');
// });

$("#darkTheme").on("click", function darkThemeEvent() {
	$("#messageWindow").toggleClass("darkThemeColors")});

// largeText.addEventListener('click', function largeTextEvent () {
// 	messageWindow.classList.toggle('largeTextLetters');
// });

$("#largeText").on("click", function largeTextEvent(){
	$("#messageWindow").toggleClass("largeTextLetters");
});

var preloaded = {};

$.ajax({url:"messages.json"}).done(loadedFile);



function loadedFile(result){
	// preloaded = JSON.parse(xhr.responseText);
	$(result).each(function (key, value){
		preloaded += value;
	});
	console.log('HELLO', typeof preloaded, preloaded);
	return preloaded;
	applyText(preloaded);
};

function failedFile(){
	alert("file failed to load");
};

function applyText(object){
	var counter = 0;
	for (var i = 0; i < object.messages.length; i++) {
		var messageCard = `<div class="lightbox" id="mess-${counter}"><h3>${object.messages[i].message}</h3><button id="card-${counter}">Delete</button></div>`;
		$("#messageWindow").append(messageCard);
		counter++;
	};
};
});