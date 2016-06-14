var messageInput = document.getElementById('messageInput');
var darkTheme = document.getElementById('darkTheme');
var largeText = document.getElementById('largeText');

//----"Dark Theme" check box listener to make background darker in message box
darkTheme.addEventListener('click', function darkThemeEvent () {
	messageWindow.classList.toggle('darkThemeColors');
});

//----"Large Text" check box listener to make text large in message box
largeText.addEventListener('click', function largeTextEvent () {
	messageWindow.classList.toggle('largeTextLetters');
});

//---Enter key event listener for message input box
messageInput.addEventListener("keypress", myFunction);

function myFunction () {
    if(event.keyCode === 13) {
    alert("You pressed a key inside the input field");
    console.log ("ENTER key used!") 
    }  
};