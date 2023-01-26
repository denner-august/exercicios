console.clear();
const input = require("fs").readFileSync("stdin", "utf8");

let [numero] = input.split(" ");

function conversor(numero) {
    
    let horas = numero / 3600;
    let minutos = new Date(numero * 1000).getUTCMinutes();
    let segundos = new Date(numero * 1000).getSeconds();

    let teste = Math.round(horas) <= 0 ? 0 : Math.round(horas - 1);
    let teste2 = Math.round(minutos)

    console.log(`${Math.ceil(horas)}:${teste2}:${segundos}`);
}



conversor(251264)







  
