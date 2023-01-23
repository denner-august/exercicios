console.clear();
const input = require("fs").readFileSync("stdin", "utf8");

let [numero] = input.split(" ");

let data = new Date(556).toLocaleString()

console.log(data);
