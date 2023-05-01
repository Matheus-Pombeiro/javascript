// Coletando dados
const nome = prompt("Qual é o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

// Mostrando uma mensagem com os dados na tela
alert(`Olá, ${nome}, você tem ${idade} anos e está aprendendo ${linguagem}.`);

// Coletando dados - parte 2
const resp = prompt(`${nome} você gosta de estudar ${linguagem}? [S/N]`);

// Mostrando uma mensagem com os dados na tela - parte 2
if (resp == "S") {
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
} else {
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}