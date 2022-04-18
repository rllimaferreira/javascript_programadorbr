// Maneiras de criar um objeto (Recapitulando)

// Opção 1

var a = {nome: "Igor", sobrenome: "Oliveira"};

console.log(a);

// Opção 2

function obj(nome, sobrenome) {

    return {nome: nome, sobrenome: sobrenome}


};

var b = new obj("Rodrigo", "Ferreira");

console.log(b);

// Opção 3

function objeto(n ,s) {

    this.nome = n;
    this.sobrenome = s;

}

var b = new objeto("Igor", "Oliveira");

console.log(b.nome);

console.log(b["nome"]);