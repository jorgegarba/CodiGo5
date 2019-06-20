// date
var fecha = new Date();
console.log(fecha);
// Obtener el anio en 4 digitos 
console.log(fecha.getFullYear());
// Obtener el mes en un numero entero [0-11]
console.log(fecha.getMonth());
// Obtener el numero del mes
console.log(fecha.getDate());
// Obtener el numero del dia
console.log(fecha.getDay());
// Obtener la hora de la fecha
console.log(fecha.getHours());
// Obtener los minutos de la fecha actual
console.log(fecha.getMinutes());
// Obtener los segundos de la fecha actual
console.log(fecha.getSeconds());
// Obtener los milisegundos de la fecha actual
console.log(fecha.getMilliseconds());
// Obtener la cantidad de millisegundos hasta ahora 
// desde el 1 de enero de 1970
console.log(fecha.getTime());

console.log("Fecha actual");
console.log(fecha);
console.log("Cambiando el anio a 2020");
fecha.setFullYear(2020);
console.log("Nueva Fecha");
console.log(fecha);

// setMonth([0-11]) => cambia el mes de la fecha
// setDate([1-31]) => cambia el dia del mes de la fecha
// setHours([0-23]) => cambia las hora de la fecha
// setMinutes([0-59]) => cambia los minutos de la fecha
// setSeconds([0-59]) => cambia los segundos de la fecha
// setMilliseconds([0-999]) => cambia los milisegundos de la fecha

// Formas de instanciar un objeto de fecha

// devuelve la fecha actual del ordenador
var miFecha = new Date();
// devuelve la fecha indicando anio,mes y dia
var miFecha2 = new Date(2019,0,5);
// devuelve la fecha con anio, mes, dia, horas, minutos, segundos
var miFecha2 = new Date(2019,0,5,20,50,50);

// Funciones extra
// toDateString => devuelve la fecha en formato americano
// sin indicar las horas
console.log(miFecha2.toDateString());
// toTimeString => devuelve la fecha en formato americano
// sin indicar el mes ni dia ni anio
console.log(miFecha2.toTimeString());
