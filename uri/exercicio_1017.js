const input = require("fs").readFileSync("stdin", "utf8");

let [tempo, velocidade] = input.split("\n");

let litros = 12;

let gasolina = (velocidade / litros) * tempo;

console.log(gasolina.toFixed(3));

//Link https://www.beecrowd.com.br/judge/pt/problems/view/1017
