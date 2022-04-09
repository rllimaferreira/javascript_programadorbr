// Estruturas condicionais - Parte 1

var idade = 18;

// Exemplo 1
if (idade > 18)
    console.log("Pode");

else
    console.log("não pode");

// Exemplo 2

if (idade > 18) {
    console.log("Pode");
    console.log("Qual o seu pedido?");
}
else if (idade >= 18) {
    console.log("Pode");
    console.log("Mostre a identidade");
}
else {
    console.log("Não pode");
    console.log("Volte futuramente");
}
    
// Exemplo 3

if (idade > 18) {
    console.log("pode");
    console.log("Qual o seu pedido?");
}
else if (idade >= 18) {
    console.log("Pode");
    console.log("Mostre a identidade");
}
else {
    console.log("Não pode");
    console.log("Volte futuramente");
}

// Exemplo 4

var idade = 19;

if (idade <= 18 || idade >= 70) {
    console.log("Pode");
    console.log("Qual o seu pedido?");
}
else {
    console.log("Não pode");
    console.log("Volte futuramente");
}