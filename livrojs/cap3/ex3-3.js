// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

// Lê os dados de entrada
const salario = Number(prompt("Qual o valor do salário do(a) funcionário(a)? R$: "));
const tempoDeServico = Number(prompt("Há quanto(s) ano(s) ele(a) trabalha na empresa? "));

// Processa os dados (cálculo)
const quadrienio = Math.floor(tempoDeServico / 4);
const percentualDeIncremento = (salario * quadrienio) / 100;
const novoSalario = salario + percentualDeIncremento;

// Saída dos dados
console.log(`O(a) funcionário(a) trabalhou em nossa empresa por ${quadrienio} quadriênio(s).`);
console.log(`E ele(a) possui direito a um novo salário de R$ ${novoSalario.toFixed(2)}`);