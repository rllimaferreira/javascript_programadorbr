// Variáveis - var, let, const

// Exemplo 1

var numero1 = 4; // variável global e pode ser reatribuído
let numero2 = 5; // variável local e pode ser reatribuído
const numero3 = 6; // variável local e não pode ser reatribuído, só pode ser usado no bloco em que for criado

numero1 = 7;

console.log(numero1);
console.log(numero2);
console.log(numero3);

// Exemplo 2

var numero4 = 4;
let numero5 = 5;
const numero6 = [4];

numero6.push(7); // O array fica o mesmo, só que agora tendo o 7 como o mais novo elemento

console.log(numero4);
console.log(numero5);
console.log(numero6);