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

    if (sender === 'bot' && message.includes('http')) {
        messageElement.innerHTML = message;
    } else {
        messageElement.textContent = message;
    }

    document.getElementById('chat-content').appendChild(messageElement);
    document.getElementById('chatbox').scrollTop = document.getElementById('chatbox').scrollHeight;
}

function getBotResponse(input) {
    const responses = {
        'hola': '¡Hola! ¿Cómo puedo ayudarte hoy?',
        'adios': '¡Adiós! Que tengas un buen día.',
        'como estas': 'Estoy bien, gracias por preguntar. ¿Y tú?',
        'que puedes hacer': 'Puedo responder a tus preguntas básicas. Pregúntame algo.',
        'quien eres': 'Soy un chatbot creado para ayudarte con tus preguntas.',
        'que hora es': `La hora actual es: ${new Date().toLocaleTimeString()}`,
        'cual es tu nombre': 'Soy JAMYCHATBOT.',
        'gracias': '¡De nada! ¿Hay algo más en lo que pueda ayudarte?',
        'ayuda': 'Estoy aquí para responder tus preguntas. Pregunta lo que necesites.',
        'donde estas': 'Estoy aquí, en esta página web, listo para ayudarte.',
        'que dia es hoy': `Hoy es: ${new Date().toLocaleDateString()}`,
        'dime un chiste': '¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.'
    };

    const normalizedInput = input.toLowerCase().trim();
    return responses[normalizedInput] || 'Para que tengamos una conversación más fluida, habla conmigo en <a href="https://web.whatsapp.com/" target="_blank">WhatsApp</a>!';
}


// caculador 

function calcularPrestamo() {
    const monto = parseFloat(document.getElementById('monto').value);
    const plazo15 = document.getElementById('plazo15').checked;
    const plazo30 = document.getElementById('plazo30').checked;
    
    let resultado = document.getElementById('resultado');
    
    if (isNaN(monto) || monto < 50000 || monto > 150000) {
        resultado.textContent = 'Por favor, ingrese un monto válido entre 50,000 y 150,000 pesos.';
        return;
    }
    
    let interes = 0;
    
    if (plazo15) {
        interes = monto * .2;

    } else if (plazo30 && monto > 99999) {
        interes = monto * 0.25;
    } else if (plazo30){
        interes = monto * 0.4;
    }
    
    else {
        resultado.textContent = 'Por favor, seleccione un plazo.';
        return;
    }
    
    const totalPagar = monto + interes;
    resultado.innerHTML = `
        <p>Intereses: ${interes.toLocaleString('es-MX')} pesos</p>
        <p>Total a pagar: ${totalPagar.toLocaleString('es-MX')} pesos</p>
    `;
}

