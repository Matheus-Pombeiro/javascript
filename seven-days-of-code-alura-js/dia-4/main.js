// Número de 0 à 7 para o jogo de advinhas (entrda)
let num = Math.floor(Math.random() * (7 - 1 + 1) + 1);

// Processamento das respostas
let tentativa;
for (tentativa = 0; tentativa < 3; tentativa++) {
    let advinha = prompt("Estou pensando em um número de 1 à 7... Tente advinhar!");
    if (advinha == num) {
       alert("Parabéns! Você acertou!");
       tentativa = tentativa + 2; // Escrevi esta linha de código para parar o programa caso o jogador acerte na primeira ou segunda tentativa.
    } else {
        alert("Que pena... Você errou.");
    }
}