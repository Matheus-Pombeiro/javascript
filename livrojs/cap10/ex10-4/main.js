// Obtém os elementos da página
const frm = document.querySelector("form");
const dvIdade = document.querySelector("#divIdade");

// Declara a função mostrar velas para exibir as velas de aniversário para o usuário
const mostrarVelas = (idade, centena, dezena, unidade) => {

    if (idade >= 100) {     // Se a idade possui um nº na casa da centena...

        // Cria tags 'img' no HTML da página
        const velaC = document.createElement("img");;       
        const velaA = document.createElement("img");
        const velaB = document.createElement("img");

        // Atribui uma 'img' para as variáveis da centena, dezena e unidade, respectivamente
        velaC.src = "img/" + centena + ".jpg";                       
        velaB.src = "img/" + dezena + ".jpg";               
        velaA.src = "img/" + unidade + ".jpg";

        // Define as variáveis das 'img' das velas como filhas de 'dvIdade'
        dvIdade.appendChild(velaC);
        dvIdade.appendChild(velaB);
        dvIdade.appendChild(velaA);

    } else if (idade >= 10) {       // Se a idade possui nº na casa decimal, mas não na casa da centena...

        // Cria tags 'img' no HTML da página 
        const velaB = document.createElement("img");
        const velaA = document.createElement("img");

        // Atribui uma 'img' para as variáveis da dezena e unidade, respectivamente
        velaB.src = "img/" + dezena + ".jpg";
        velaA.src = "img/" + unidade + ".jpg";

        // Define as variáveis das 'img' das velas como filhas de 'dvIdade'
        dvIdade.appendChild(velaB);
        dvIdade.appendChild(velaA);
 
    } else {        // Senão...
    
      const velaA = document.createElement("img");      // Cria uma tag 'img' no HTML da página
      velaA.src = "img/" + unidade + ".jpg";            // Atribui uma 'img' para as variáveis da unidade
      dvIdade.appendChild(velaA);                       // Define a var da 'img' da vela como filha de 'dvIdade' 

    }

}

// 'Escuta' o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();     // Evita o envio automático do 'form'

    const idade = Number(frm.inIdade.value);        // Obtém a idade do usuário

    // Obtém os números que compõe as casas da centena, dezena e unidade da idade inserida pelo usuário
    const centena = Math.floor(idade / 100);
    const dezena = Math.floor((idade / 10) % 10);
    const unidade = idade % 10;

    mostrarVelas(idade, centena, dezena, unidade);     // Chama a função mostrar velas com passagem de parâmetros

})

// 'Escuta' o click no botão 'reset'
frm.addEventListener("reset", () => {

    window.location.reload();       // Recarrega a página e consequentemente as velas

})