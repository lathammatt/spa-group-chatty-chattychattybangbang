var messageInput = document.getElementById('messageInput');
var clearBtn = document.getElementById('clearBoardButton');
var darkTheme = document.getElementById('darkTheme');
var largeText = document.getElementById('largeText');
var container = document.getElementById('container');

darkTheme.addEventListener('click', function darkThemeEvent () {
	container.classList.toggle('darkThemeColors');
});

largeText.addEventListener('click', function largeTextEvent () {
	container.classList.toggle('largeTextLetters');
});


// var test = document.getElementById("messageInput");

// test.addEventListener("keyup", myFunction);

// function myFunction () {
//     if(event.keyCode === 13) {
//     alert("You pressed a key inside the input field");
//     console.log ("ENTER key used!") 
//     }  
// };

var xhr = new XMLHttpRequest();
// var preloaded = null;
xhr.addEventListener("load", loadedFile)
xhr.addEventListener("failed", failedFile)

xhr.open("GET", "messages.json");

xhr.send();

var preloaded = "";


function loadedFile(){
	// console.log("file loaded");
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
		var messageCard = `<div class="lightbox"><h3>${object.messages[i].message}</h3><button id="card-${counter}">Delete</button></div>`;
		messageWindow.innerHTML += messageCard;
		counter++;
		console.log("apply", messageCard);
	};
};
console.log("check", preloaded);
// 
// 
// 
// 