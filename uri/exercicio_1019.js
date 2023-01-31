console.clear();
const input = require("fs").readFileSync("stdin", "utf8");

let [numero] = input.split(" ");

let horas = numero / 3600;
let minutos = new Date(numero * 1000).getUTCMinutes();
let segundos = new Date(numero * 1000).getSeconds();

console.log(`${Math.floor(horas)}:${Math.round(minutos)}:${segundos}`);











