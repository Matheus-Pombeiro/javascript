// Conversão de Tipos

console.log("Conversão de Tipos");

// Concatenação
console.log("ano" + 2023);
console.log("20" + "23");

// Conversão de string para numeric.
console.log(parseInt("2") + parseInt("2"));
console.log(parseFloat("7") / parseFloat("2"));

// Note que as casas decimais em linguagens de programação obedecem às regras matemáticas dos USA e o ponto flutuante não é representado por vírgula, mas por um ponto entre a unidade e o valor decimal. Exemplo:
console.log(2.5); // É equivalente à 2,5 nas normas brasileiras.
console.log(2,5); // O JS retorna '2 5' ao executar esta operação.

// Divisão e Multiplicação entre valores do tipo string --> Funcionam, pois o JS entende que por se tratar de uma operação divisão/multiplicação não se trata de um texto, mas sim de um número.
console.log("10" / "2"); 
console.log("10" * "2");

// Porém nesses casos a operação retornará a msg 'NaN' (Not a Number), pois entende que o primeiro valor não se trata de um número, mas sim de um texto mesmo.
console.log("Matheus" / "2"); 
console.log("Matheus" * "2");