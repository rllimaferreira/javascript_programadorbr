// Loop - Repetição

//Exemplo 1

var numero = 5;

for(var vez = 0; vez < numero; vez++) {

console.log("Executando o for");

}

console.log("Acabou");

// Exemplo 2

var numero = 5;

for(var vez = 0; vez < numero; vez++) {

console.log("Executando o for pela " + vez + "ª " + "vez");

}

console.log("Acabou");

// Exemplo 3

var numero = 5;

for(var i = 0; i < numero; i++) {

console.log("Executando o for pela " + i + "ª " + "vez");

}

console.log("Acabou");

// Exemplo 4

var numero = 5;

for(var i = 0; i < numero; i++) {

console.log("Executando o for pela " + i + 10 + "ª " + "vez");

}

console.log("Acabou");

// Exemplo 5 - Outro tipo de laço (o while)

var numero = 5;

while (numero < 10) {
    console.log("Numero " + numero);
    numero++; // Se não colocar isso, vai ter looping infinito
}

console.log("Acabou");

// Exemplo 6 - Usando o random

var numero = Math.random();

console.log(numero);

console.log("Acabou");

// Exemplo 7 (Parte 1) - Usando o random (multiplicado por 100) - Testando primeiro sem o while...

var numero = Math.random() * 100;

console.log(numero);

console.log("Acabou");

// Exemplo 7 (Parte 2) - Usando o random (multiplicado por 100) - Testando primeiro com o while...

var numero = Math.random() * 100;

while (numero < 90) {
    console.log(numero);
    numero++;
}
console.log(numero);
console.log("Acabou");

// Exemplo 7 (Parte 3)

var numero = Math.random() * 100;

while (numero < 90) {
    console.log(numero);
    numero = Math.random() * 100;
}
console.log(numero);
console.log("Acabou");