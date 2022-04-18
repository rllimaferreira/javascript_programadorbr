// Objetos - Parte 1

var aluno = {
              nome: "João",
              notas: [7.5, 5.0]
}; // Chave para acessar algum elemento

console.log(aluno["nome"][1]);

// Exemplo 3

var aluno = new Object();

aluno.nome = "Igor";
aluno.notas = [8, 9];

var aluno2 = {
    nome: "José",
    notas: [5, 4]
}

console.log(aluno);
console.log(aluno2);