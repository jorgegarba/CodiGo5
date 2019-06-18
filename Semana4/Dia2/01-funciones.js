// declarando a una funcion
// Funciones que no reciben parametros ni retornan valor
function sumar(){
    var a = 8;
    var b = 8;
    console.log(`Suma ${a+b}`);
}
// Funciones que reciben parametros y no retornan valor
function sumarV2(a,b){
    console.log(`Suma ${a+b}`);
}
// Funciones que retornan valor y no reciben parametros
function obtenerFecha(){
    var miFecha = new Date();
    return miFecha;
}
// Funciones que reciben parametros y retornan valor
function sR(a,b){
    return (a+b);
}
sumar();
sumarV2(10,20);
sumarV2(9,60);
var resultado = obtenerFecha();
console.log(resultado);
console.log(obtenerFecha());

var total = sR(6,56);
console.log(total);

console.log(sR(sR(1,2),sR(3,4)));

// 1 - Mostrar un menú
// ----- 1.- Sumar  ----
// ----- 2.- Restar ----
// ----- 3.- Salir  ----
// 1 => El programa debe pedir dos
        // numeros e imprimir la suma
// 2 => El programa debe pedir dos
        // numeros e imprimir la resta
// luego de hacer cualquier operacion
// el programa, automaticamente debe mostrar
// el menú nuevamente. hasta que el usuario 
// coloque el numero 3 (opcion salirsh)