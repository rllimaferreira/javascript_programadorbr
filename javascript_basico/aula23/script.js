// Objetos - Parte 3

// Exemplo 1

// var calcMedia = function() {
//     return (this.nota1 + this.nota2) / 2;
// }

// var turma = [
//     {
//         nome: "Igor",
//         nota1: 9,
//         nota2: 7,
//         media: calcMedia
//     },
//     {
//         nome: "João",
//         nota1: 4,
//         nota2: 3,
//         media: calcMedia
//     }

// ]

// var aluno = turma[1];
// console.log(aluno);
// console.log(aluno.media());

// Exemplo 2

function criarAluno(nome, n1, n2) {

    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function() {
            return (this.nota1 + this.nota2) / 2;
        }
    }
}

var turma = [
    criarAluno("Igor", 9, 6),
    criarAluno("João", 7, 4),
    criarAluno("Marcela", 8, 7.5)
]

var aluno = turma[2];

// console.log(aluno);
// console.log(aluno.media());

// Continuação..

turma.forEach(function (element) {

    console.log(element);
});

// Ou usar:

// for (var aluno of turma) {
//     console.log(aluno.nome + " - " + aluno.media());
// }

// O resultado vai ser o nome de cada aluno com a média ao lado

// Outra maneira de criar o objeto 

function alunoObjeto(nome, n1, n2) {

    this.nome = nome,
    this.nota1 = n1,
    this.nota2 = n2,

    this.media = function() {
        return (this.nota1 + this.nota2) / 2;
    }
}

var alunoA = new alunoObjeto("Igor", 8, 7); // Instanciar um objeto - Igor é uma instância de objeto
var alunoB = new alunoObjeto("João", 6, 7);

console.log(alunoA.media());
console.log(alunoB.media());
console.log(alunoA.media(), " E ", alunoB.media());

// Isso é chamado de construtor de um objeto