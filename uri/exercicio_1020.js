console.clear()
const input = require("fs").readFileSync("stdin", "utf8");

let [number] = input.split("\n");

let segundos = parseInt(number)

let numeros = [365, 30]

let datas = {}


for (let index = 0; index < numeros.length; index++) {

    let calc = Math.round(segundos / numeros[index])

    let multiplica = (numeros[index] * calc)

    segundos = segundos - multiplica

    if (numeros[index] === 365) {
        datas.ano = calc

    }

    if (numeros[index] === 30) {
        datas.mes = calc
    }

    datas.dias = segundos
}

console.log(`${datas.ano} ano(s)\n${datas.mes} mes(es)\n${datas.dias} dia(s)\n`);
