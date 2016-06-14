var Chatty = (function applyText(object){
	var counter = 0;
	for (var i = 0; i < object.messages.length; i++) {
		var messageCard = `<div class="lightbox"><h3>${object.messages[i].message}</h3><button id="card-${counter}">Delete</button></div>`;
		container.innerHTML += messageCard;
		counter++;
		console.log("apply", messageCard);
	};
}
)(Chatty);	


