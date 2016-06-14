var Chatty = (

	function applyNew(newChat){
		var test = document.getElementById("messageInput");
		test.addEventListener("keyup", function () {
		if(event.keyCode === 13){
		var newObj = {"message": test.value};

		preloaded.messages.push(newObj);				
		
		console.log("newChat", preloaded);
	}
});
	return newChat;

})(Chatty);

// console.log("newChat", Chatty);

