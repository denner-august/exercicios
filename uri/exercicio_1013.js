const input = require("fs").readFileSync("stdin", "utf8");

let [a, b, c] = input.split(" ");

let maior = Math.max(a, b, c);

console.log(`${maior} eh o maior`);
