// Funções
// A função dá um "apelido" para o bloco de comando
// E toda a vez que chamar esse apelido, o computador vai executar esse bloco

// Exemplo 1
function media(n1, n2) {
    var nota1 = n1;
    var nota2 = n2
    var media = (nota1 + nota2) / 2;
    console.log(media);
}

media(7, 9);

// Exemplo 2 - Uma (f) tem o poder de retornar um valor

function mediaExemploDois(n1, n2) {
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;

    return media;
}

var resultado1 = mediaExemploDois(6, 7);
var resultado2 = mediaExemploDois(8, 7);

console.log(resultado1 + " E " + resultado2);

// Uma (f) tem o poder de retornar um valor