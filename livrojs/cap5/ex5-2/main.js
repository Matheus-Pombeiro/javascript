// Cria a referência para os elementos 'form' e 'resposta'
const frm = document.querySelector("form");
const respDecrescimento = document.querySelector(".resposta__decrescimento");

// Cria um ouvinte para quando o botão 'submit' for clicado
frm.addEventListener("submit", (e) => {

    // Evita o envio automático do 'form'
    e.preventDefault();

    // Cria a referência para o input
    const numero = Number(frm.inNumero.value);

    // Declara a variável 'decrescao'
    let decrescao = `Entre ${numero} e 1: `;

    // Cria um loop para o decrescimento do número
    for (i = numero; i > 0; i--) {

        // Cria uma condição para resolver o problema do últmio número terminar com ',' (vírgula)
        if (i == 1) {

            decrescao = decrescao + i + ".";

        } else {

            decrescao = decrescao + i + ", ";

        }

    }

    // Exibe a resposta para o usuário
    respDecrescimento.innerText = decrescao;

})

// Limpa o campo 'resposta'
frm.addEventListener("reset", () => {
    respDecrescimento.innerText = "";
})