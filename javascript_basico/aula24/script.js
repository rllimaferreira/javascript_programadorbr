// Objetos - Parte 4 (Resumo)

// Exemplo 1 - Já se trata de um objeto
var a = {
   
}

console.log(a);

// Exemplo 2

var a = {
    nome: "Igor",
    sobrenome: "Oliveira"
}

console.log(a);

// Exemplo 3

function obj(n, s) {
    
    return {nome: n, sobrenome: s}
}

var a = obj("Igor", "Oliveira");

console.log(a);

// Exemplo 4

function objExemplo(n, s) {

    this.nome = n;
    this.sobrenome = s;

}

var a = new obj("Igor", "Oliveira");

console.log(a.nome); // Podemos acessar a(s) propriedade(s) do objeto desta maneira ou da maneira abaixo
console.log(a["sobrenome"]);