console.clear();
const input = require("fs").readFileSync("stdin", "utf8");

let [total] = input.split("\n");

let numeroTotal = total;

let notas = [100, 50, 20, 10, 5, 2, 1];

let saida = [];

let decomposicao = {};

notas.forEach((nota) => {
  decomposicao[nota] = 0;
  while (numeroTotal >= nota) {
    decomposicao[nota]++;
    numeroTotal -= nota;
  }
});

const result = notas.map((nota) => {
  return `${decomposicao[nota]} nota(s) de ${nota.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}`;
});

result.unshift(total);

result.reduce((preve, next, index, arr) => {
  preve = next;

  console.log(preve);

  return preve;
}, []);

// const result = notas.map((nota) => {
//   return `${decomposicao[nota]} nota(s) de ${nota.toLocaleString("pt-br", {
//     style: "currency",
//     currency: "BRL",
//   })}`;
// });

// console.log(saida);
