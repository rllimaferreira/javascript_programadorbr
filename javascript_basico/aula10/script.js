// Strings

// Exemplo 1
var str = "Valor qualquer";
str += " ";
str += "outro texto";

console.log(str);

// Exemplo 2

var str = "Valor qualquer ";
str += "outro texto";
console.log(str);

// Exemplo 3

var str = "Valor qualquer";
str += " outro texto";
console.log(str);

// Exemplo 4

var str = "Valor qualquer" + " " + "Outro texto";
console.log(str);

// Exemplo 5

var numero = "8" * 2; // Neste caso, o Javascript transforma a string para um número quando imprime o resultado
var str = "Valor qualquer " * 2;

console.log(numero);
console.log(str);
