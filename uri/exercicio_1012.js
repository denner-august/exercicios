const input = require("fs").readFileSync("stdin", "utf8");

let [a, b, raio] = input.split(" ");

let pi = 3.14159;

let triangulo = (a * raio) / 2;

let area = pi * raio ** 2;

let trapzio = ((parseFloat(a) + parseFloat(b)) * raio) / 2;

let quadrado = b ** 2;

let retangulo = a * b;

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
console.log(`CIRCULO: ${area.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapzio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);

//Link https://www.beecrowd.com.br/judge/pt/problems/view/1012
