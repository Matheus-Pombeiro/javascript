// No desafio desta aula, temos uma lista de cores que serão utilizadas para pintar uma loja, porém o cliente informou que não deseja mais pintar com a cor "vermelha". Retire esta cor da lista utilizando um método do JavaScript.

// Array das Cores
var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"];

// Tirando a cor vermelha do array
lista.splice(1, 1);

console.log(lista); // ["Laranja", "Branco", "Amarelo", "Rosa"]

// Ao utilizar o método splice(), o primeiro parâmetro a ser informado é a posição do item a ser removido, e o segundo parâmetro informa quantos itens serão removidos a partir de sua posição.