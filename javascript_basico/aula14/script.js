// Operador ternário
// Parecido com o if e else, mas é escrito em uma linha apenas
// Utilizado para fazer uma verificação simples e colocar um valor dentro de uma variável
// Construção --> condição / se for true, executa esta / se for false, executa esta 

// Exemplo 1

var idade = 17;

idade >= 18 ? console.log("Pode!") : console.log("Não pode!");

// Exemplo 2

var idade = 20;
var pode = idade >= 18 ? true : false;

console.log(pode);

// Exemplo 3

var idade = 26;
var pode = idade >= 18 ? "Pode!" : "Não pode!";

console.log(pode);