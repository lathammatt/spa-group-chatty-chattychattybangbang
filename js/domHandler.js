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


var test = document.getElementById("messageInput");

test.addEventListener("keypress", myFunction);

function myFunction () {
    if(event.keyCode === 13) {
    alert("You pressed a key inside the input field");
    console.log ("ENTER key used!") 
    }  
};