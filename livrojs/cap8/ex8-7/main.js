// Obtém os elementos do 'form' e da saída de dados
const frm = document.querySelector("form");
const respSenha = document.querySelector(".outSenha");

// 'Escuta' o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();                 // Evita o envio automático do 'form'
    const nome = frm.inNome.value;      // Obtém o nome do aluno

    const nomeCompleto = validarNome(nome);     // Obtém a 'function' 'validarNome'
    const sobrenome = obterSobrenome(nome);     // Obtém a 'function' 'obterSobrenome'
    const vogais = contarVogais(nome);          // Obtém a 'function' 'contarVogais'

    if (nomeCompleto == true) {                                                                         // Se o nome estiver completo...
        respSenha.innerText = "Senha Inicial: " + sobrenome + vogais.toString().padStart(2, "0");       // Exibe a senha
    } else {                                                                                            // Senão...
        respSenha.innerText = "Erro... O nome está incompleto";                                         // Exibe um alerta
    }

})

const validarNome = (nome) => {

    const partes = nome.split(" ");     // Obtém as partes do nome do aluno

    let completo;               // Declara uma var vazia

    if (partes.length < 2) {    // Se o nome do aluno não tiver sobrenome...
        completo = false;       // a var recebe o valor 'false'
    } else {                    // Senão...
        completo = true;        // a var recebe o valor 'true'
    }
    
    return completo;            // Retorna 'completo' como 'true' or 'false'

}

const obterSobrenome = (nome) => {

    const partes = nome.split(" ");                                 // Obtém as partes do nome do aluno
    const ultimoNome = partes[partes.length - 1].toLowerCase();     // Obtém o último nome do aluno em letras minúsculas
    return ultimoNome;                                              // retorna 'ultimoNome'
    
}

const contarVogais = (nome) => {

    const tam = nome.length;            // Declara uma var que recebe o tamanho do nome

    let contador = 0;                   // Declara uma variável para contar o nº de vogais

    for (let i = 0; i < tam; i++) {     // Cria um loop para auxiliar no processamento dos dados

        // Cria uma condição para contar as vogais do nome do aluno
        if (nome.charAt(i) == "a" || nome.charAt(i) == "e" || nome.charAt(i) == "i" || nome.charAt(i) == "o" || nome.charAt(i) == "u") {
            contador++;     // Aumenta 'contador'
        }

    }

    return contador;        // Retorna 'contador'

}