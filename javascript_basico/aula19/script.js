// Funções - Parte 2

// Exemplo 1

function saudacao() {
    return "Olá, Mundo!"
}

var s = saudacao();

console.log(s);

// Exemplo 2

var media = function (n1, n2) {

    return (n1 + n2) / 2; // Vai retornar
}

console.log(media(5, 6)); // Vai imprimir

// Exemplo 3- Função anônima (colocar uma função dentro de uma variável)

var media = function (n1, n2) {

    return (n1 + n2) / 2;

}

var m = media(5, 6);

console.log(m);

// Exemplo 4 - Arrow function (funções de seta)

var media = (n1, n2) => {
    
    return (n1 + n2) / 2;

}

var m = media(5, 6);

console.log(m);