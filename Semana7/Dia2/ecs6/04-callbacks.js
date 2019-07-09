// Los callbacks son funciones
// pasadas como parámetros, que serán 
// ejecutadas en otras funciones

let cuadrado = (numero, f) => {
    f(numero*numero);
}


cuadrado(9, (respuesta) => {
    console.log(respuesta);
})