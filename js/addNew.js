var Chatty = (

	function applyNew(newChat){
		var test = document.getElementById("messageInput");
		test.addEventListener("keyup", function () {
		if(event.keyCode === 13){
			var newObj = {"message": test.value};
			if (preloaded.messages.length < 20){
			preloaded.messages.push(newObj);}
			else {
				var clickedbtn = event.target.id.split("-")[1];
				preloaded.messages.splice(clickedbtn, 1, {});;
				preloaded.messages.push(newObj);
				messageWindow.removeChild(messageWindow.firstChild);}
			var messageCard = `<div class="lightbox" id="mess-${(preloaded.messages.length)-1}"><h3>${preloaded.messages[(preloaded.messages.length)-1].message}</h3><button id="card-${preloaded.messages.length-1}">Delete</button></div>`;
			messageWindow.innerHTML += messageCard;
			test.value = ""
			clearBtn.classList.remove('disableBtn');
	}
});
	return newChat;

})(Chatty);


