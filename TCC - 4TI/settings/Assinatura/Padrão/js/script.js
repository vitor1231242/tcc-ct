// Captura o formulário
const form = document.getElementById('subscriptionForm');
const confirmationMessage = document.getElementById('confirmationMessage');

// Evento ao enviar o formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Exibe a mensagem de confirmação
    confirmationMessage.style.display = 'block';

    // Redireciona para a página inicial após 5 segundos
    setTimeout(function() {
        window.location.href = '/TCC - 4TI/index.html'; // Substitua 'index.html' pela URL da página inicial
    }, 5000); // 5000 milissegundos = 5 segundos
});
