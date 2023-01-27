console.clear()
const input = require("fs").readFileSync("stdin", "utf8");

let [number] = input.split("\n");

let segundos = number

let numeros = [365, 30]

let datas = {}

numeros.forEach(number => {

    let calc = Math.round(segundos / number)

    let multiplica = (number * calc)

    segundos = segundos - multiplica

    // datas[`${number}`] = calc

    switch (number) {

        case number == 365:
            datas.ano = calc
            break;

        case number == 30:
            datas.mes = calc
            break;

        default:
            datas.dias = segundos
            break;
    }

});


console.log(datas);