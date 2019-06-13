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

var numeroCita = 8;
var precio;

switch (numeroCita) {
  case 1:
    precio = 200;
    console.log("el precio de la cita es : " + precio);
    break;
  case 2:
    precio = 200;
    console.log("el precio de la cita es : " + precio);
    
    break;
  case 3:
    precio = 200;
    console.log("el precio de la cita es : " + precio);
    
    break;
  case 4:
    precio = 150;
    console.log("el precio de la cita es : " + precio);
    
    break;
  case 5:
    precio = 150;
    console.log("el precio de la cita es : " + precio);
    
    break;
  case 6:
    precio = 100;
    console.log("el precio de la cita es : " + precio);
    
    break;
  case 7:
    precio = 100;
    console.log("el precio de la cita es : " + precio);
    
    break;
  case 8:
    precio = 100;
    console.log("el precio de la cita es : " + precio);
    
    break;
  default:
    precio = 50;
    console.log("el precio de la cita es : " + precio);
    
    break;
}
