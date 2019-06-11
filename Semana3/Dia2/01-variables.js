console.log('Prueba :)');
// se crean con el prefijo var
/* es sensible a las mayusculas
RECUERDEN pongan ; al finalizar sus sentencias
console.log sirve para mostrar en la consola del navegador
variables inicien o sean un número
*/

var nombre;
nombre = "Jorge";
var Nombre = "Lucia";
// se puede declarar variables en la misma linea;
var a = 90, b = 60, c = 30;

// Una peculariedad de JS es que permite cambiar el tipo
// de dato de la variable;
var edad = 28;
edad = "28 años";

// Números // NUMBER

var x=9;
var y=3.1415;
var exponente = 10e10;

// TEXTO // STRING
// podemos utilizar '' o "" pero por convencion siempre que nos acordemos utilizemos ''; 

var string = "codigo";
var hola ="hola";
var caracter ="J";

console.log(string);
console.log(hola);
console.log(caracter);

// LÓGICAS // BOOLEANAS
// o es verdadero o es falso
var pizzaconpinha = true;
var piscoeschileno = false;

console.log(pizzaconpinha);
console.log(piscoeschileno);

// VALORES RAROS

console.log('Valor raro 1 - Infinity',5/0);
//Not a number NaN
console.log('valor raro 2 - NaN',5/"patata");
//undefiner es un estado sin definir si no damos un valor a una variable
var algo;
console.log(algo);

// OPERADORES ARITMETICOS
console.log('::::OPERADORES ARITMETICOS::::');

var numero1 = 9;
var numero2 = 6;

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
var residuo = numero1%numero2;

console.log("num 1 es " + numero1);
console.log("num 2 es " + numero2);
console.log("la suma es " + suma);
console.log("la resta es " + resta);
console.log("la multiplicación es " + multiplicacion);
console.log("la división es " + division);
console.log("el residuo es " + residuo);

// var mitexto = prompt("Hola escribe algo");

// operador Unario

var texto = "hola";
var numerito = 32142154215;

console.log(texto + " es un " + typeof(texto));
console.log(numerito + " es un "+ typeof(numerito));

// Caracteres extraños en Strings

var otrotexto = "hola chicos"; 

var otrotexto2 = "\"hola chicos\"";

console.log(otrotexto2);
// va a ejecutar un salto de linea con \n
var otrotexto3 = "hola\\n\chicos";
console.log(otrotexto3);