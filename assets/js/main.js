document.addEventListener('DOMContentLoaded', () => {
    /*=============== SHOW HIDDEN - PASSWORD ===============*/
    const showHiddenPass = (inputId, eyeId) => {
        const input = document.getElementById(inputId);
        const iconEye = document.getElementById(eyeId);

        if (!input || !iconEye) return; // Verifica se os elementos existem

        iconEye.addEventListener('click', () => {
            // Alterna o tipo do input entre 'password' e 'text'
            if (input.type === 'password') {
                input.type = 'text';
                iconEye.classList.add('ri-eye-line');
                iconEye.classList.remove('ri-eye-off-line');
            } else {
                input.type = 'password';
                iconEye.classList.remove('ri-eye-line');
                iconEye.classList.add('ri-eye-off-line');
            }
        });
    }

    /*=============== REGISTER FUNCTION ===============*/
    const register = () => {
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-pass').value;
        const confirmPassword = document.getElementById('confirm-pass').value;

        // Verifica se as senhas coincidem
        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }

        // Armazena o usuário no localStorage
        const user = { name, email, password };
        localStorage.setItem('user', JSON.stringify(user));

        alert('Usuário registrado com sucesso!');
        window.location.href = 'index.html'; // Redireciona para a página de login após o registro
    }

    /*=============== LOGIN FUNCTION ===============*/
    const login = () => {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-pass').value;

        // Obtém os dados do usuário do localStorage
        const user = JSON.parse(localStorage.getItem('user'));

        if (user && user.email === email && user.password === password) {
            alert('Login bem-sucedido!');
            window.location.href = 'TCC - 4TI/index.html'; // Redireciona para uma página de boas-vindas após o login bem-sucedido
        } else {
            alert('Email ou senha incorretos!');
        }
    }

    /*=============== RESET PASSWORD FUNCTION ===============*/
    const resetPassword = () => {
        const email = document.getElementById('forgot-email').value;

        // Verifica se o email está registrado (exemplo simplificado)
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.email === email) {
            alert('Instruções para redefinir a senha foram enviadas para o seu email.');
            window.location.href = 'index.html'; // Redireciona para a página de login após redefinir a senha
        } else {
            alert('Email não encontrado.');
        }
    }

    // Inicie as funções para mostrar/ocultar as senhas nos formulários
    showHiddenPass('register-pass', 'register-eye');
    showHiddenPass('confirm-pass', 'confirm-eye');
    showHiddenPass('login-pass', 'login-eye');

    // Associar a função de registro ao formulário de registro
    const registerForm = document.querySelector('form');
    if (registerForm && registerForm.action.includes('register.html')) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            register();
        });
    }

    // Associar a função de login ao formulário de login
    const loginForm = document.querySelector('.login__form');
    if (loginForm && loginForm.action.includes('index.html')) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            login();
        });
    }

    // Associar a função de redefinição de senha ao formulário de redefinição de senha
    const forgotPasswordForm = document.querySelector('form[action="forgot-password.html"]');
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', (event) => {
            event.preventDefault();
            resetPassword();
        });
    }
});
