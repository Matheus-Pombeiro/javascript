// Estruturas de Repetição em JavaScript

// Listas = Arrays!
const listaDeDestinos = [`Salvador`, `São Paulo`, `Rio de Janeiro`,]

const idadeComprador = 14;
const estaAcompanhada = true; // 'true' e 'false' são operadores booleanos
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
const temPassagem = false;
const destino = "Salvador";
let destinoExiste = false;

let cont = 0;

console.log("Trabalhando com Estruturas de Repetição em JavaScript.")

listaDeDestinos.push(`Curitiba`);

console.log(`Destinos Possíveis:`);
console.log(listaDeDestinos);

while (cont < listaDeDestinos.length) {
    if (listaDeDestinos[cont] == destino) {
        destinoExiste = true;
        break;
    }

    cont ++;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem!");

} else {
    console.log("Desculpe. Houve algum erro.");

}

// for (i = 0; i < listaDeDestinos.length; i ++) {  // O 'for' é dividido em três partes: 1º declaração da variáve; 2º condição para a execução do programa (true or false); e 3º incremento da variável.

//     if (listaDeDestinos[i] == destino) {
//         destinoExiste = true;
        
//     }

// }