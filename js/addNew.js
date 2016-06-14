var Chatty = (

	function applyNew(newChat){
		var test = document.getElementById("messageInput");
		test.addEventListener("keyup", function () {
		if(event.keyCode === 13){
		var newObj = {"message": test.value};

		preloaded.messages.push(newObj);
		var messageCard = `<div class="lightbox" id="mess-${(preloaded.messages.length)-1}"><h3>${preloaded.messages[(preloaded.messages.length)-1].message}</h3><button id="card-${preloaded.messages.length-1}">Delete</button></div>`;
		messageWindow.innerHTML += messageCard;
		console.log("newChat", preloaded.messages);
		test.value = ""
	}
});
	return newChat;
	return preloaded;

})(Chatty);

// console.log("newChat", Chatty);

