// Operadores Lógicos e Comparação Lógica

// && e
// || ou
// Negativo

// Exemplo 1

var a = true;
var b = false;

var c = a && b; // Se ambos forem verdadeiros, ele retorna true. Qualquer coisa diferente disso, ele retorna false

console.log(c); // Retorna false

// Exemplo 2

var a = true;
var b = true;

var c = a && b; // Se ambos forem verdadeiros, ele retorna true. 

console.log(c); // Retorna true

// Exemplo 3

var a = false;
var b = false;

var c = a && b; 

console.log(c); // Retorna false

// Exemplo 4 (contextualizando)

var idade = 35;

var maior20 = idade > 20;
var menor30 = idade < 30;

var entre = maior20 && menor30;

console.log("Idade ", idade);

console.log("Maior que vinte ", maior20);

console.log("Menor que trinta ", menor30);

console.log("Entre 20 e 30 ", entre);

console.log("-------------------------------------------------------------------------");

// Exemplo 5 (contextualizando)

var idade = 20;

var menor10 = idade <= 10;
var maior65 = idade >= 65;

var gratuidade = menor10 || maior65;

console.log("Idade ", idade);

console.log("Maior que 65 ", maior65);

console.log("Menor que 10 ", menor10);

console.log("Tem direito a gratuidade? ", entre);