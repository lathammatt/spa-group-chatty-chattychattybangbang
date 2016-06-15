var Chatty = (function deleteMessage (newChat){
	document.querySelector("body").addEventListener("click", function(event) {
  	if (event.target.parentNode.className === "lightbox") {
    	var clickedbtn = event.target.id.split("-")[1];
    	var cardtodelete = document.getElementById("mess-" + `${clickedbtn}`);
		messageWindow.removeChild(cardtodelete)
		preloaded.messages.splice(clickedbtn, 1, {});
		}
	});
	return newChat;

})(Chatty);