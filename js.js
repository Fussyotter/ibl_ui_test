document
	.getElementById('message-form')
	.addEventListener('submit', function (event) {
		// Prevent the form from submitting normally
		event.preventDefault();

		// Get the input element and its value
		var input = document.getElementById('message-input');
		var message = input.value;

		// Create a new paragraph element for the message
		var messageElement = document.createElement('p');
		messageElement.textContent = message;

		// Add the message to the chat window
		document.getElementById('chat-window').appendChild(messageElement);

		// Clear the input
		input.value = '';
	});
