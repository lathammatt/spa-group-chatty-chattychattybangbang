var Chatty = (function deleteMessage (newChat){
	document.querySelector("body").addEventListener("click", function(event) {
  	console.log(event);
  	if (event.target.parentNode.className === "lightbox") {
    	console.log("You clicked on a `lightbox` button");
    	var clickedbtn = event.target.id.split("-")[1];
    	var cardtodelete = document.getElementById("mess-" + `${clickedbtn}`);
		console.log("clicked", clickedbtn, cardtodelete);
		messageWindow.removeChild(cardtodelete)
		preloaded.messages.splice(clickedbtn, 1, {});
		}
	});
	return newChat;

})(Chatty);