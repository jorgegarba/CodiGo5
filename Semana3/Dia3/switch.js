var numeroMes;
//switch

switch (numeroMes) {
  case 1:
    console.log("Enero");
    break;
  case 2:
    console.log("Febrero");
    break;
  case 3:
    console.log("Marzo");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Mayo");
    break;
  default:
    console.log("Revisa el dato que has ingresado");
}

/* 
El consultorio del Dr. Lorenzo T. Mata Lozano tiene como política cobrar la consulta con base en el número de cita, de la siguiente forma:
• Las tres primeras citas a $200.00 c/u.
• Las siguientes dos citas a $150.00 c/u.
• Las tres siguientes citas a $100.00 c/u.
• Las restantes a $50.00 c/u, mientras dure el tratamiento.
Se requiere un algoritmo para determinar:
a) Cuánto pagará el paciente por la cita.
b) El monto de lo que ha pagado el paciente por el tratamiento.
Para la solución de este problema se requiere saber qué número de
cita se efectuará, con el cual se podrá determinar el costo que tendrá la consulta y cuánto se ha gastado en el tratamiento.
*/

var numeroCita = 2;
var precio;
switch (true) {
  case numeroCita >= 1 && numeroCita <= 3:
    precio = 200;
    break;
  case numeroCita >= 4 && numeroCita <= 5:
    precio = 150;    
    break;
  case numeroCita >= 6 && numeroCita <= 8:
    precio = 100;    
    break;
  default:
    precio = 50;   
    break;
}

console.log("El precio es precio " +  precio);

