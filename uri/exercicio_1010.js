const input = require("fs").readFileSync("stdin", "utf8");

let [client1, client2] = input.split("\n");

let [cod1, peca1, value1] = client1.split(" ");
let [cod2, peca2, value2] = client2.split(" ");

let calcCliente1 = value1 * peca1;

let calcCliente2 = value2 * peca2;

let ValorPagar = calcCliente1 + calcCliente2;

console.log(`VALOR A PAGAR: R$ ${ValorPagar.toFixed(2)}`);

//Link https://www.beecrowd.com.br/judge/pt/problems/view/1010
