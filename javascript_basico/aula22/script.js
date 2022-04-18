// Objetos - Parte 2

// Exemplo 1
var aluno = {
    nome: "Igor",
    notas: [7, 8],

    media: function(n1, n2) {
        return (n1 * 2 + n2) / 3;
    }
}

var aluno1 = {
    nome: "João",
    notas: [6, 8],

    media: function(n1, n2) {
        return (n1 * 2 + n2) / 3;
    }
}

console.log(aluno.nome);
console.log(aluno.media(aluno.notas[0], aluno.notas[1]));

console.log(aluno1.nome);
console.log(aluno1.media(aluno.notas[0], aluno1.notas[1]));

// Exemplo 2

// Exemplo 3

function calcMedia(n1, n2) {
    return (n1 + n2) / 2;
}

var aluno = {
    nome: "Igor",
    notas: [7, 8],

    media: function() {
        return (this.notas[0] + this.notas[1]) / 2;
    }
}

var aluno1 = {
    nome: "João",
    notas: [6, 8],

    media: function() {
        return (this.notas[0] + this.notas[1]) / 2;
    }
}

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno1.media());

// Exemplo 4

function calcMedia() {
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
    nome: "Igor",
    notas: [9, 8],

    media: calcMedia
}

var aluno1 = {
    nome: "João",
    notas: [5, 8],

    media: calcMedia
}

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno1.media());