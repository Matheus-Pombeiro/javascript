const elemento = document.querySelector("#calcular")
const resultado = document.querySelector(".resultado");

elemento.addEventListener("click", () => {
    resultado.innerText="Fui Clicado";
})