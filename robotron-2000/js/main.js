const robotron = document.querySelector("#robotron")

robotron.addEventListener("click", (evento) => {
    console.log(evento)
});

// Para declarar uma função anônima támbem é possível usar: () => {}

function dizOi (nome) {
    console.log(nome);
    console.log("Bem-vindo ao Robotron 2000");
}

dizOi ("Matheus");