let palavraCorreta = 'GATO';
let letrasDisponiveis = document.querySelector('.letras-disponiveis .letras');
let espacoLetras = document.querySelector('.espaco-letras .palavra');
let feedback = document.getElementById('feedback'); // Seleciona o elemento de feedback
let imagemCachorro = document.querySelector('.imagem-palavra img');

// Função para atualizar a imagem do cachorro
function atualizarImagemCachorro(feliz) {
    if (feliz) {
        imagemCachorro.src = './img/gato-feliz.png'; // Caminho da imagem do cachorro feliz
    } else {
        imagemCachorro.src = './img/gato-chorando.png'; // Caminho da imagem do cachorro triste
    }
}

// Função para reiniciar a imagem do cachorro para a imagem inicial (triste)
function reiniciarImagemCachorro() {
    imagemCachorro.src = './img/normal.png'; // Caminho da imagem inicial do cachorro
}

let letrasEmbaralhadas = embaralharPalavra(palavraCorreta);
letrasEmbaralhadas.split('').forEach(letra => {
    const divLetra = document.createElement('div');
    divLetra.textContent = letra.toUpperCase();
    divLetra.classList.add('letra');
    divLetra.addEventListener('click', () => moverLetra(divLetra, letrasDisponiveis, espacoLetras));
    letrasDisponiveis.appendChild(divLetra);
});

function embaralharPalavra(palavra) {
    return palavra.split('').sort(() => Math.random() - 0.5).join('');
}

function moverLetra(letra, origem, destino) {
    if (destino.children.length >= palavraCorreta.length) {
        feedback.textContent = 'Você já preencheu todas as letras!';
        return;
    }
    destino.appendChild(letra.cloneNode(true));
    letra.remove();
}

function verificarPalavra() {
    let letrasFormadas = Array.from(espacoLetras.children).map(letra => letra.textContent).join('').toUpperCase();
    if (letrasFormadas === palavraCorreta) {
        feedback.textContent = 'Parabéns! Você formou a palavra correta!';
        atualizarImagemCachorro(true); // Atualiza imagem do cachorro para feliz
    } else {
        feedback.textContent = 'A palavra formada está incorreta. Tente novamente.';
        atualizarImagemCachorro(false); // Atualiza imagem do cachorro para triste
    }
}

function novoJogo() {
    let letrasNoEspaco = Array.from(espacoLetras.children);
    letrasNoEspaco.forEach(letra => {
        letrasDisponiveis.appendChild(letra.cloneNode(true));
        letra.remove();
    });
    letrasEmbaralhadas = embaralharPalavra(palavraCorreta);
    letrasDisponiveis.innerHTML = '';
    letrasEmbaralhadas.split('').forEach(letra => {
        const divLetra = document.createElement('div');
        divLetra.textContent = letra.toUpperCase();
        divLetra.classList.add('letra');
        divLetra.addEventListener('click', () => moverLetra(divLetra, letrasDisponiveis, espacoLetras));
        letrasDisponiveis.appendChild(divLetra);
    });
    feedback.textContent = ''; // Limpa o feedback ao iniciar um novo jogo
    reiniciarImagemCachorro(); // Reinicia a imagem do cachorro para a inicial
}
