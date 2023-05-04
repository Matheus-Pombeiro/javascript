// Número de 0 à 7 para o jogo de advinhas (entrda)
let num = Math.floor(Math.random() * (7 - 1 + 1) + 1);

// Processamento das respostas
let tentativa;
let acertou = false;
for (tentativa = 0; tentativa < 3; tentativa++) {
    let advinha = prompt("Estou pensando em um número de 1 à 7... Tente advinhar!");
    if (advinha == num) {
       alert("Parabéns! Você acertou!");
       acertou = true;
       break
    } else {
        alert("Você errou...");
    }
}

if (!acertou) {
    alert(`Infelizmente você não acertou. O número era ${num}`);
}