// => Estarás casado con ______ tendrás _____ Hijos y viviran en _______ y estaras trabajando de _________
var pareja = "Osmar";
var hijos = 11;
var ciudad = "Tangamandapio";
var trabajo = "Barman";

console.log("Estarás casado con " + pareja + " tendrás " + hijos + " Hijos y vivirán en " + ciudad + " y estarás trabajando de " + trabajo);

// EJERCICIO 2
/*2. Una empresa desea saber la edad del personal, pero solo tiene el año de nacimiento

=>La edad del trabajador es: ____ ó ____
*/
var anioDeNacimiento = 1990;
var anioActual = 2019;
var edad = anioActual - anioDeNacimiento;

console.log("2. la edad del trabajador es : " + edad + "ó" + (edad-1));

/* EJERCICIO 3
A una persona se le cobrará por el uso de agua en su piscina calcular el pago que realizará según el volumen, costo de metro cúbico y veces que llene de agua la piscina

ANCHO X LARGO X ALTO = volumen

=> el pago por X metros cubicos, y N veces de llenado es: _____
*/

var alto = 2;
var ancho = 5;
var largo = 10;

var volumen = alto*ancho*largo;

var costo = 4;
var vecesLlenado = 3;
var resultado = volumen * costo * vecesLlenado;

console.log("3. el llenado por " + volumen + " m3 y " + "vecesllenado es " + resultado);

/*EJERCICIO 4. 
Se han preguntado cuantos platos de su snack favorito comerán en el resto su vida) (si ese snack lo comen a diario)

=> Tu vas a comer tu snack favorito _____ veces hasta que mueras a la edad de ______

*/

var edadMaxima = 90;
var edadActual = 50;
var edadRestante = edadMaxima - edadActual;
var dias = 365;

console.log("tu vas a comer tu snack favorito aprox " + (edadRestante*dias) +"hasta la edad de : " + edadMaxima);

//EJERCICIO 5 CONVERSOR c° a f°

var celsius = 16;
var farenheit = (celsius * 1.8) + 32;

console.log(celsius + " Celsius equivalen a" + farenheit + " Farenheit");
