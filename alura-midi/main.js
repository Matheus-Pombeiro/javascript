function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play(); 
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

// Enquanto
while(contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSom;

    contador ++;
}