// Lendo o valor do jantar
const jantar = Number(prompt("Qual foi o valor do jantar: R$ "));

// Calculando o valor a pagar pelo jantar
const taxaGarcom = jantar * 0.1;    // 10%
const totalAPagar = jantar + taxaGarcom;

// Mostrando os valores ao cliente
alert(`O valor do jantar foi R$${jantar} e a gorjeta do garçom de 10% foi R$${taxaGarcom}.`);
alert(`O total a pagar pelo seu jantar é R$${totalAPagar}`);
alert("Obrigado. Volte sempre!");