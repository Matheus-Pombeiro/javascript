// Listas em JavaScript.

console.log("Trabalhando com Listas em JavaScript");

// Variáveis comuns declaradas com const e até mesmo let.
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

// Listas = Arrays!

const listaDeDestinos = new Array(
    `Salvador`, 
    `São Paulo`, 
    `Rio de Janeiro`, 
);

listaDeDestinos.push(`Curitiba`); // Adiciona um elemento no final da lista (push = empurrar).

console.log(`Destinos Possíveis:`);
console.log(listaDeDestinos);

listaDeDestinos.splice(2,1); // Deleta um elemento na posição 2.

console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[2]); // Exibe o elemento naquela posição específica.