console.clear();
const input = require("fs").readFileSync("stdin", "utf8");

let [total] = input.split("\n");


let decomposicao = {};

let numeroTotal = total;

let notas = [100, 50, 20, 10, 5, 2, 1];

notas.forEach((nota) => {
  decomposicao[nota] = 0;
  while (numeroTotal >= nota) {
    decomposicao[nota]++;
    numeroTotal -= nota;
  };
});

const result = notas.map((nota) => {
  return `${decomposicao[nota]} nota(s) de ${nota.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}`;
});

result.unshift(total);

console.log(`${result.join('\n')}`);




