// Condicionais em JavaScript

console.log("Trabalhando com Condicionais em JavaScript");

// Listas = Arrays!

const listaDeDestinos = new Array(
    `Salvador`, 
    `São Paulo`, 
    `Rio de Janeiro`, 
);

listaDeDestinos.push(`Curitiba`);

console.log(`Destinos Possíveis:`);
console.log(listaDeDestinos);

const idadeComprador = 14;
const estaAcompanhada = true; // 'true' e 'false' são operadores booleanos
const temPassagem = true;

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Comprador pode comprar a passagem.");
    listaDeDestinos.splice(2,1); // Deleta um elemento na posição 2

} else {
    console.log("Comprador menor de idade e não posso vender.");
}

console.log("Embarque.");

if (idadeComprador >= 18 && temPassagem == true) {
    console.log("Boa Viagem!");
} else {
    console.log("Infelizmente você não pode embarcar.");
}

console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[2]); // Exibe o elemento naquela posição específica