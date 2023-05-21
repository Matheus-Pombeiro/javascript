// Mensagem de entrada
console.log("Estou aprendendo sobre vetores (arrays) e sobre desestruração de objetos!");
console.log("-".repeat(40));            // Repete a string "." 40x
console.log("Pacientes:");

// Declara e inicializa o vetor 'pacientes'
let pacientes = ["João", "Sofia"];

// Incrementa o vetor 'pacientes'
pacientes = ["Ana", ...pacientes];      // Adiciona "Ana" ao início do vetor
pacientes = [...pacientes, "Maria"];    // Adiciona "Maria" ao final do vetor

// Exibe o vetor 'pacientes'
console.log(pacientes);