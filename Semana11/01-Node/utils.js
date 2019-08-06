const fs = require('fs');
var colors = require('colors');

let tabla = (numero) => {
    let data = "";
    for (let i = 0; i <= 10; i++) {
        data = data + `${numero} * ${i} = ${numero * i}\n`;
    }
    fs.writeFile(`./resultados/tabla-del-${numero}.txt`, data, error => {
        if (error) {
            throw error
        } else {
            console.log(`La tabla del ${numero} ha sido creada`);
        }
    });
}
let imprimirTabla = (numero) => {
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} * ${i} = ${numero * i}\n`.underline.red);
    }
}

module.exports = {
    tabla:tabla,
    imprimirTabla:imprimirTabla
}