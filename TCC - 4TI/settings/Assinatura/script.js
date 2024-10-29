// script.js

document.addEventListener('DOMContentLoaded', function() {
    const buyBasicoButton = document.getElementById('buy-basico');
    const buyPadraoButton = document.getElementById('buy-padrao');
    const buyPremiumButton = document.getElementById('buy-premium');

    buyBasicoButton.addEventListener('click', function() {
        // Redirecionar para uma página fictícia de pagamento para o plano Básico
        window.location.href = 'Padrão/payment_basico.html';
    });

    buyPadraoButton.addEventListener('click', function() {
        // Redirecionar para uma página fictícia de pagamento para o plano Padrão
        window.location.href = 'Premium/payment_padrao.html';
    });

    buyPremiumButton.addEventListener('click', function() {
        // Redirecionar para uma página fictícia de pagamento para o plano Premium
        window.location.href = 'Premium/payment_premium.html';
    });
});
