/* El director de una escuela está organizando un viaje de estudios, y requiere determinar cuánto debe cobrar a cada alumno y cuánto debe pagar a la compañía de viajes por el servicio. La forma de cobrar es la siguiente: si
son 100 alumnos o más, el costo por cada alumno es de $65.00; de 50 a 99 alumnos, el costo es de $70.00, de 30 a 49, de $95.00, y si son menos de 30, el costo de la renta del autobús es de $4000.00, sin importar el número de alumnos.
Realice un algoritmo que permita determinar el pago a la compañía de autobuses y lo que debe pagar cada alumno por el viaje*/

var numeroAlumnos = 110;
var precioFinal;
console.log(numeroAlumnos);
switch(true){
    case (numeroAlumnos >= 100):
        precioFinal = numeroAlumnos * 65;
        console.log(precioFinal);
        break;
    case (numeroAlumnos < 100 && numeroAlumnos >= 50):
        precioFinal = numeroAlumnos * 70;
        console.log(precioFinal);
        break;
    case (numeroAlumnos <=49 && numeroAlumnos >=30):
        precioFinal = numeroAlumnos * 95;
        console.log(precioFinal);
        break;
    default:
        precioFinal = 4000;
        console.log(precioFinal);
}