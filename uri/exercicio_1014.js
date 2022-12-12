const input = require("fs").readFileSync("stdin", "utf8");

let [distancia, combustivel] = input.split("\n");

let consumoMedio = distancia / combustivel;

console.log(`${consumoMedio.toFixed(3)} km/l`);
