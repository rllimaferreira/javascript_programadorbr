// Datas

// Exemplo 1

var d = new Date();

console.log(d);

// Exemplo 2

var d = new Date(2018, 08, 12, 22, 45);

console.log(d);

// Exemplo 3

var d = new Date(1000 * 60 * 5);

console.log(d);

// Exemplo 4

var d = new Date("sep 05 2017 23:25");

console.log(d);

// Exemplo 5

var d = new Date("02 05 2017 23:25");

console.log(d);

// Exemplo 6
var d = new Date("05-25/1999");

console.log(d);

// Exemplo 7

var d = new Date("2022");

console.log(d);

// Exemplo 8

var d = new Date("05-15-1999");

console.log(d.getFullYear()); // É um método (e está mais para uma função por conta dos parênteses)

// Exemplo 9

var d = new Date("05-15-1999");

console.log(d.getDay()); // Pega o dia da semana, que vai de 0 a 6

// Exemplo 10

var dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

console.log(d);
console.log(dias[d.getDay()]);

// Exemplo 11

var d = new Date(124353234456);

console.log(d);
console.log(d.getHours());

console.log(d.getMinutes());

console.log(d.getSeconds());

console.log(d.getMilliseconds());

console.log(d.getMonth());

console.log(d.getTime());

console.log(d);
console.log(d.setDate(20));

console.log(d);
console.log(d.setFullYear(2010));
console.log(d);

console.log(d);
console.log(d.setHours(22));
console.log(d);