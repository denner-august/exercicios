const input = require("fs").readFileSync("stdin", "utf8");

let [a, b, c] = input.split(" ");

let maior = Math.max(a, b, c);

console.log(`${maior} eh o maior`);

//Link https://www.beecrowd.com.br/judge/pt/problems/view/1013
