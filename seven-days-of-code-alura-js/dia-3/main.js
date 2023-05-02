// Mensagem de entrada
alert("Olá, você! Permita-me te fazer algumas perguntas...");

// Lendo respostas (entrada)
const frontOuBack = prompt("Você deseja seguir carreira na área do Front-end ou do Back-end?");

if (frontOuBack === "front-end") {
    prompt("Legal! E você deseja aprender React.js ou Vue.js?");
} else if (frontOuBack === "back-end") {
    prompt("Legal! E você deseja aprender C# ou Java?");
} else {
    alert("A resposta digitada é invalida...\nTente novamente.");
}
