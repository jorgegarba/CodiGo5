// Math => Libreria que posee un conjunto 
// de funciones matematicas

var numero = 81;
// raiz cuadrada
console.log(Math.sqrt(numero));
// potencia
console.log(Math.pow(5,3));
// el piso de un numero
console.log("Piso de 5.9 => " + Math.floor(5.9));
// el techo de un numero
console.log("Piso de 4.01 => " + Math.ceil(4.01));
// la funcion de rendondeo
console.log(`Redondeo de 10.5 => ${Math.round(10.5)}`);
// la funcion random
console.log(`Random entre 0 y 1 => ${Math.random()}`);
// la funcion random customizada
console.log(`Random entre 5 y 69 => ${Math.random() * (69-5) + 5}`);

