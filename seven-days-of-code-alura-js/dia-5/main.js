// Entrada de dados
let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";

let adicionarMais = "sim" // valor inicial como "sim", porque a primeira vez sempre vai entrar no while

// Processamento dos dados
while (adicionarMais != "não") {
    adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    while (adicionarMais != "sim" && adicionarMais != "não") { //Enquanto o texto lido for  diferente de "sim" e de "não", exibir que não foi reconhecido e perguntar novamente
    alert("Operação não reconhecida.")
    prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");  
    }

    if (adicionarMais === "não") { // Se texto lido for "não", sair do while.
        break;
    }

    comida = prompt("Qual comida você deseja inserir?");
    categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
    
    if (categoria === 'frutas') {
        frutas.push(comida);
    } else if (categoria === 'laticínios') {
        laticinios.push(comida);
    } else if (categoria === 'doces') {
        doces.push(comida);
    } else if (categoria === 'congelados') {
        congelados.push(comida);
    } else {
        alert("Essa categoria não foi pré-definida.");
    }

}

// Saída dos dados
alert(`Lista de compras:\nFrutas: ${frutas}\nLaticínios: ${laticinios}\nDoces: ${doces}\nCongelados: ${congelados}`);