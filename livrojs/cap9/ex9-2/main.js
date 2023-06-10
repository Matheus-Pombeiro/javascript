// Obtém os elementos da página
const frm = document.querySelector("form");
const imgClube = document.querySelector("#imgClube");
const divTitulo = document.querySelector("#divTitulo");
const inRadios = document.querySelectorAll("input");        // Obtém todos os 'inputs' do documento por meio do 'querySelectorAll'

// Declara uma função para receber a troca de clube
const trocarClube = () => {

    const clubes = ["Brasil", "Pelotas", "Farroupilha"];     // Declara um vetor com a lista do clubes

    let selecao;        // Declara a var 'selecao'

    // Percorre os 'inRadios' para verificar qual está selecionado
    for (let i = 0; i < inRadios.length; i++) {
        if (inRadios[i].checked) {      // Se o clube na posição 'i' estiver selecionado...
            selecao = i;                // Armazena o índice do clube selecionado
            break;                      // Sai da repetição
        }
    }

    if (selecao <= 2) {     // Se a var 'selecao' for <= a 2, quer dizer que o usuário torce para algum time
        
        divTitulo.className = `row cores-${clubes[selecao]}`;       // Modifica a cor

        // Muda a propriedade 'src' com a imagem do clube selecionado
        imgClube.src = `img/${clubes[selecao].toLowerCase()}.png`;
        imgClube.className = "img-fluid";                   // Muda o estilo para exibir a imagem
        imgClube.alt = `Símbolo do ${clubes[selecao]}`;     // Texto alternativo
        localStorage.setItem("clube", clubes[selecao]);     // Salva o nome do clube
        
    } else {        // Se nenhum clube for selecionado...

        divTitulo.className = "row";        // Tira a classe de cor de 'divTitulo'
        imgClube.className = "d-none";      // Oculta a imagem
        imgClube.alt = "";                  // Limpa o texto alternativo
        localStorage.removeItem("clube");   // Remove a var do 'localStorage'

    }

}

// Percorre os elementos para associar a função ao evento change
for (const inRadio of inRadios) {
    inRadio.addEventListener("change", trocarClube);
}

// Declara uma função para verificar se o usuário já havia escolhido um clube em sua última visita ao site
const verificarClube = () => {

    if (localStorage.getItem("clube")) {        // Se já tiver sido salvo algum clube no navegador
    
        const clube = localStorage.getItem("clube");        // Obtém o nome do clube

        // Conforme o clube, marca 'checked'
        if (clube == "Brasil") {
            inRadios[0].checked = true;
        } else if (clube == "Pelotas") {
            inRadios[1].checked = true;
        } else if (clube == "Farroupilha") {
            inRadios[2].checked = true;
        }

        trocarClube();      // Chama a função 'trocarClube' para trocar a imagem e as cores do site

    }

}

// Ao carregar a página, verifica se o cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClube);