document.querySelector('.logo-container').addEventListener('mouseenter', function() {
    document.getElementById('chat-container').classList.add('active');
});

document.querySelector('.chat-container').addEventListener('mouseleave', function() {
    document.getElementById('chat-container').classList.remove('active');
});

document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;

    addMessage(userInput, 'user');

    const botResponse = getBotResponse(userInput);
    addMessage(botResponse, 'bot');

    document.getElementById('user-input').value = '';
});

function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    document.getElementById('chat-content').appendChild(messageElement);
    document.getElementById('chatbox').scrollTop = document.getElementById('chatbox').scrollHeight;
}

function getBotResponse(input) {
    // Simple logic for bot response
    const responses = {
        'hola': '¡Hola! ¿Cómo puedo ayudarte hoy?',
        'adios': '¡Adiós! Que tengas un buen día.',
        'como estas': 'Estoy bien, gracias por preguntar. ¿Y tú?',
    };

    const normalizedInput = input.toLowerCase();
    return responses[normalizedInput] || 'Lo siento, no entiendo esa pregunta.';
}
