// Array - Vetor

// Exemplo 1

var vetor = new Array();

console.log(vetor);

// Exemplo 2

var alunos = new Array("Igor", "José", "Marcos", "Mariana");

console.log(alunos[4]);

// O array é um conjunto de variáveis;
// Ele é sequencial;
// Começa sempre no 0;
// O índice vai de 0 até o último elemento -1

var alunos = new Array("Igor", "José", "Marcos", "Mariana");

console.log(alunos);
console.log(alunos.length);

// Exemplo 3

// Em vez disso abaixo

var aluno1 = "Igor";
var aluno2 = "José";
var aluno3 = "Marcos";
var aluno4 = "Mariana";
var aluno5 = "Joana";

console.log(aluno1);
console.log(aluno2);
console.log(aluno3);
console.log(aluno4);
console.log(aluno5);

// Vai ser melhor usar

var alunos = ["Igor", "José", "Marcos", "Mariana", "Joana", "Leo", "João"];

for(var i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}

// Exemplo 4

var alunos = ["Igor", "José", "Marcos", "Mariana", "Joana", "Leo", "João"];

for (var aluno in alunos) {
    console.log(aluno); // imprimirá os index
}

for (var aluno of alunos) {
    console.log(aluno); // imprimirá os elementos do array
}

// O array é como se fosse uma sequência de variáveis juntas