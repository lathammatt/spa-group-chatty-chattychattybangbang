// event listener that targets input box on DOM, and detects
// once ENTER key is clicked... 


var test = document.getElementById("messageInput");

test.addEventListener("keypress", myFunction);

function myFunction () {
    if(event.keyCode === 13) {
    alert("You pressed a key inside the input field");
    console.log ("ENTER key used!") 
    }  
};
