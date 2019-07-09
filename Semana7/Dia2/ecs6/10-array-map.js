//[Array].map(()=>{})
// Recibe los mismo paramatros que la funcion forEach
// Funcion que devuelve un nuevo arreglo con los elementos
// modificados

let numeros = [4,9,12,3,90,40];
let mitades = numeros.map((numero)=>{
    return numero/2;
});
// mitades de los elementos mayores a 10
let mitadesMa10 = numeros.filter(n => n > 10).map( m => m/2);

console.log(mitades);
console.log(mitadesMa10);