// Criação de Sistema para Escola (Simulado em array, porque está sem banco de dados)
// O que preciso: lista - Nome do aluno - nota 1 - nota 2 - média - aprovado - reprovado

// Exemplo
var nomes = ["Igor", "José", "Maria"];
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];

function media(n1, n2) {
    return (n1 + n2) / 2;
}

function passou(media) {

    // Opção 1 - Sem usar o else
   /* var resultado = "Reprovado";

    if (media > 7) {
        resultado = "Aprovado";
    }

    return resultado; */

    // Opção 2 - Com o else
    if (media > 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }

    // Opção 3 - Com ternário
    // media > 7 ? console.log("Aprovado") : console.log("Reprovado")
}

for (var index in nomes) {

    var nota1 = notasA[index];
    var nota2 = notasB[index];

    var m = media(nota1, nota2);

    console.log(nomes[index] +
        " - " +
        nota1 +
        " - " +
        nota2 +
        " - " +
        m +
        " - " +
        passou(m));
}
