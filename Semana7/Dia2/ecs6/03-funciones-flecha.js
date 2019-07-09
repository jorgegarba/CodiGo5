// funcion tradicional
function sumar([a, b]) {
    return a + b;
}
console.log(sumar([66, 3]));

let sumaFlecha = ([a, b]) => {
    return a + b;
}

console.log(sumaFlecha([90, 6]));

let saludar = nombre => console.log(`Buenas ${nombre}`);

saludar("Alberto");

// la funcion cuadrado, omite la palabra reservada
// "return", sólo es válido cuando la función,
// es de una línea y retorna un elemento
let cuadrado = numero => Math.pow(numero,2);

console.log(cuadrado(7));
