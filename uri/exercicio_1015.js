const input = require("fs").readFileSync("stdin", "utf8");

let [x, y] = input.split("\n");

let [x1, y1] = x.split(" ");

let [x2, y2] = y.split(" ");

let a = (x2 - x1) ** 2;

let b = (y2 - y1) ** 2;

let distancia = Math.sqrt(a + b);

console.log(distancia.toFixed(4));
