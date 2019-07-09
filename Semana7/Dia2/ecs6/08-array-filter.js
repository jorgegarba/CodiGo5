//[array].filter(()=>{})
// el callback recibe los mismos parametros
// que el metodo forEach
// Funcion que retorna un nuevo arreglo dada una condicion
// con cada elemento del arreglo inicial
let numeros = [23,54,7,34,89,76,5];

// en este caso "mayoresA20" sera un nuevo arreglo
// con todos los elementos mayores a 20
let mayoresA20 = numeros.filter(numero=>{
    return numero > 20;
});

mayoresA20.forEach(elemento=>console.log(elemento));