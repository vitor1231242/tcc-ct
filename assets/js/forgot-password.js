const resetPassword = () => {
    const email = document.getElementById('reset-email').value;

    // Aqui você pode adicionar a lógica para enviar um e-mail de redefinição de senha
    // Isso pode ser feito com uma chamada de API para o backend, por exemplo

    alert('Instruções de recuperação de senha foram enviadas para ' + email);
    window.location.href = 'index.html';
}
