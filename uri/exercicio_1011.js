const input = require("fs").readFileSync("stdin", "utf8");

let [raio] = input.split("\n");

let pi = 3.14159;

let calc = (4 / 3) * pi * raio ** 3;

console.log(`VOLUME = ${calc.toFixed(3)}`);

//Link https://www.beecrowd.com.br/judge/pt/problems/view/1011
