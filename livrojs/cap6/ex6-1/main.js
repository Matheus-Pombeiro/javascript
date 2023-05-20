// Obtém os elementos da página
const frm = document.querySelector("form");
const respPacienteEmAtendimento = document.querySelector(".resposta__paciente-em-atendimento");
const respListaDosPacientes = document.querySelector(".resposta__lista-dos-pacientes");

// Declara o vetor de escopo global 'pacientes'
const pacientes = [];

// Cria um 'ouvinte' para quando o botão 'submit' for clicado
frm.addEventListener("submit", (e) => {

    // Evita o envio automático do 'form'
    e.preventDefault();

    // Obtém o nome do paciente
    const nome = frm.inPaciente.value;

    // Adiciona o nome ao final do vetor
    pacientes.push(nome);

    // Declara a var 'lista' com uma string vazia
    let lista = "";

    // Cria um loop 'for' tradicional (inicia em 0, enquanto menor que o tamanho do array)
    for (let i = 0; i < pacientes.length; i++) {

        lista += `${i + 1}. ${pacientes[i]}\n`;

    }

    // Exibe a lista de pacientes para o usuário
    respListaDosPacientes.innerText = lista;

    // Limpa o conteúdo do formulário
    frm.inPaciente.value = "";

    // Posiciona o cursor no campo
    frm.inPaciente.focus();
})

