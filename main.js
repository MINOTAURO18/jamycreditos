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
    const opciones = document.getElementById('opciones')
    const valor = opciones.value

    
    let resultado = document.getElementById('resultado');
   
    
    let interes = 0;
    
    if (valor == 15 && monto == 100000) {
        interes =12000;}
    else if (valor == 30 && monto == 100000){
        interes = 22000;
    }
    else if(valor == 15 && monto == 150000){
        interes = 15000
    }

    else if(valor == 30 && monto == 150000){
        interes = 25000;
    }
    else if(valor == 15 && monto == 200000){
        interes = 20000;
    }
    else if(valor == 30 && monto == 200000){
        interes = 26000;
    }
    else if(valor == 15 && monto == 250000){
        interes = 25000;
    }
    else if(valor == 30 && monto == 250000){
        interes = 30000;
    }
    else if(valor == 15 && monto == 300000){
        interes = 30000;
    }
    else if(valor == 30 && monto == 300000){
        interes = 38000;
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


// SLIDER 

const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
let index = 0;

function showNextSlide() {
    index++;
    if (index >= slide.length) {
        index = 0;
    }
    slides.style.transform = `translateX(-${index * 100}%)`;
}

// Cambiar de slide cada 2 segundos
setInterval(showNextSlide, 2200);

