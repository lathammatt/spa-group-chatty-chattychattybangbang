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