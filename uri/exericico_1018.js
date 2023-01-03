console.clear();
const input = require("fs").readFileSync("stdin", "utf8");

let [total] = input.split("\n");

let numero = total;

let notas = [100, 50, 20, 10, 5, 2, 1];

let decomposicao = {};

notas.forEach((nota) => {
  decomposicao[nota] = 0;
  while (numero >= nota) {
    decomposicao[nota]++;
    numero -= nota;
  }
});

const result = notas.map((nota) => {
  return `${decomposicao[nota]} nota(s) de ${nota.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}`;
});

let log = [total, ...result];
