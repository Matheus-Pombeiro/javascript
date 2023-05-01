// Variáveis do tipo number
let numeroUm = 1;
let numeroTrinta = 30;
let numeroDez = 10;

// Variáveis do tipo string
let stringUm = '1';
let stringTrinta = '30';
let stringDez = '10';

// ---------------------------------------------------------

// Estrutura condicional para as variáveis Um
if (numeroUm === stringUm) {
    console.log('As variáveis numeroUm e stringUm têm os mesmo valor e o mesmo tipo');
} else {
    console.log('As variáveis numeroUm e stringUm podem até ter o mesmo valor, mas não têm o mesmo tipo');
}

// Estrutura condicional para as variáveis Trinta
if (numeroTrinta === stringTrinta) {
    console.log('As variáveis numeroUm e stringUm têm o mesmo valor e o mesmo tipo');
} else {
    console.log('As variáveis numeroUm e stringUm podem até ter o mesmo valor, mas não têm o mesmo tipo');
}

// Estrutura condicional para as variáveis Dez
if (numeroDez === stringDez) {
    console.log('As variáveis numeroDez e stringDez têm o mesmo valor e o mesmo tipo');
} else {
    console.log('As variáveis numeroDez e stringDez podem até ter o mesmo valor, mas não tem o mesmo tipo');
}

// ---------------------------------------------------------

// Estrutura condicional para variáveis (numebers) diferentes
if (numeroDez === numeroUm) {
    console.log('As variáveis numeroDez e numeroUm têm o mesmo valor e o mesmo tipo');
} else {
    console.log('As variáveis numeroDez e numeroUm podem até ter o mesmo tipo, mas não têm o mesmo valor');
}

// Estrutura condicional para variáveis (strings) diferentes
if (stringUm === stringTrinta) {
    console.log('As variáveis stringUm e stringTrinta têm o mesmo valor e o mesmo tipo');
} else {
    console.log('As varíaveis stringUm e stringTrinta podem até ter o mesmo tipo, mas não têm o mesmo valor');
}