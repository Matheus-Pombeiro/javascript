// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

console.log("Estou aprendendo sobre Funções e Eventos em JS");      // Mensagem inicial
console.log("-".repeat(40));                                        // Exibe 40 traços na tela

const vinhos = [];      // Declara um vetor de escopo global para armazenar os vinhos

// Declara a 'function' titulo que será usada em todo o programa
function titulo(texto) {                // Recebe, por parâmetro, o texto a ser exibido
    console.log();                      // Exibe uma linha em branco
    console.log(texto);                 // Exibe o texto
    console.log("-".repeat(40));        // Exibe 40 sinais de igual na tela
}

// Declara a 'function' 'incluir()'
function incluir() {
    titulo("---< Inclusão de Vinhos >---");     // Exibe o título

    const marca = prompt("Marca...: ");            // Lê a marca do vinho
    const tipo = prompt("Tipo....: ");            // Lê o tipo do vinho
    const preco = Number(prompt("Preço R$: "));    // Lê o preço do vinho

    vinhos.push({marca, tipo, preco});                      // Insere um objeto no vetor
    console.log("Ok! Vinho cadastrado com sucesso");        // Exibe uma mensagem de confirmação      
}

// Declara a 'function' 'lstar()'
function listar() {
    titulo("---< Lista de Vinhos Cadastrados >---");                        // Exibe o título
    console.log("Marca............... Tipo................ Preço R$:");      // Exibe uma mensagem de suport

    // Percorre o vetor para exibir todos os vinhos
    for (const vinho of vinhos) {
        console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ` + `${vinho.preco.toFixed(2).padStart(9)}`);
    }
 }

// --------------- Programa Principal ---------------

// Declara um loop
do {

    titulo("---< Cadastro de Vinhos >---");     // Exibe o título

    // Opções de Escolha
    console.log("1. Inclusão de Vinhos");
    console.log("2. Listagem de Vinhos");
    console.log("3. Pesquisa por Tipo");
    console.log("4. Média e Destaques");
    console.log("5. Finalizar\n");
    const opcao = Number(prompt("Opção: "));    // Lê a opção

    if (opcao == 1) {
        incluir();
    } else if (opcao == 2) {
        listar();
    } else if (opcao == 3) {
        pesquisar();
    } else if (opcao == 4) {
        calcularMeda();
    } else if (opcao == 5) {
        break;
    } else {
        console.log("Erro... Valor Inválido!");
    }
    
} while (true)