const input = require("fs").readFileSync("stdin", "utf8");

let [carro] = input.split("\n");

let minutos = 2;

console.log(`${2 * carro} minutos`);
