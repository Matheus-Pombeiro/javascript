// Mensagem de entrada
alert("Olá, você! Permita-me te fazer algumas perguntas...");

// Lendo respostas (entrada)
const frontOuBack = prompt("Você deseja seguir carreira na área do Front-end ou do Back-end?");
let linguagem = "";

// Processando dados a respeito de front-end e back-end
if (frontOuBack === "front-end") {
    linguagem = prompt("E você deseja aprender React.js ou Vue.js?");
} else if (frontOuBack === "back-end") {
    linguagem = prompt("E você deseja aprender C# ou Java?");
} else {
    alert("A resposta digitada é invalida... Tente novamente.");
}

// Processando dados a respeito de especialização ou fullstack
const especialidadeOuFullstack = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack.")
if (especialidadeOuFullstack == 1) {
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} para dominar a área de ${frontOuBack}!`);
} else if (especialidadeOuFullstack == 2) {
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
} else {
    alert("Você não inseriu um valor válido.");
}

// Processando dados a respeito das linguagens de programação que o usuário deseja aprender
let resp = prompt("Existe alguma outra tecnologia que você gostaria de aprender? [S/N]");

while (resp !== "N") {
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`);
    resp = prompt("Existe alguma outra tecnologia que você gostaria de aprender? [S/N]");
}

// Mensagem final
alert("Bom, infelizmente chegamos ao fim de nossa conversa...\nMas não se preocupe, sempre que desejar responder o meu questionário estarei aqui para você!");