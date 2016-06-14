var messageWindow = document.getElementById('messageWindow');
var clearBtn = document.getElementById('clearBoardButton');

clearBtn.addEventListener('click', function () {
	while(messageWindow.firstChild) {
		messageWindow.removeChild(messageWindow.firstChild);
	};
});

