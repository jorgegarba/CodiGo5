/**
 * Almacenes “El harapiento distinguido” tiene una promoción: a todos los
trajes que tienen un precio superior a $2500.00 se les aplicará un descuento de 15 %, a todos los demás se les aplicará sólo 8 %. Realice un algoritmo
para determinar el precio final que debe pagar una persona por comprar
un traje y de cuánto es el descuento que obtendrá.
 */

var precio = 2000;
var precioventa;
if(precio > 2500){
    precioventa = precio*0.85;
    console.log(precioventa);
}else{
    precioventa = precio*0.92;
    console.log(precioventa);
}

/* 
es una empresa dedicada a ofrecer banquetes; sus
tarifas son las siguientes: el costo de platillo por persona es de $95.00,
pero si el número de personas es mayor a 200 pero menor o igual a 300,
el costo es de $85.00. Para más de 300 personas el costo por platillo es de
$75.00. Se requiere un algoritmo que ayude a determinar el presupuesto
que se debe presentar a los clientes que deseen realizar un evento.
*/
var cant_platos = 350;
var precio_final;

if(cant_platos > 300){
    precio_final = cant_platos*75;
    console.log("el precio por plato es : " + precio_final);
}else if(cant_platos > 200 && cant_platos<=300){
    precio_final = cant_platos*85;
    console.log("el precio por plato es : " + precio_final);
}else{
    precio_final = cant_platos*95;
    console.log("el precio por plato es : " + precio_final);
}

/* La asociación de vinicultores tiene como política fijar un precio inicial al kilo de uva, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2.
Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño,se requiere determinar cuánto recibirá un productor por la uva que entrega en un embarque, considerando lo siguiente: si es de tipo A, se le cargan 20¢ al precio inicial cuando es de tamaño 1; y 30¢ si es de tamaño 2. Si es de tipo B, se rebajan 30¢ cuando es de tamaño 1, y 50¢ cuando es de tamaño 2. Realice un algoritmo para determinar la ganancia obtenida*/

var tipoUva = "B";
var tamano = 1;
var precioUva =5;
var cantKilos = 100;

if(tipoUva == "A"){
    if(tamano == 1){
        precioUva=precioUva+0.20;
        console.log(cantKilos*precioUva);
    }else{
        precioUva=precioUva+0.30;
        console.log(cantKilos*precioUva);
    }
}else{
    // aca asumo que ya es de tipo B 
    if(tamano==1){
        precioUva=precioUva-0.30;
        console.log(cantKilos*precioUva);
    }else{
        precioUva=precioUva-0.50;
        console.log(cantKilos*precioUva);
    }
}

//OPERADOR TERNARIO;

var precioPan = 0.2;

if(precioPan <=0.2){
    console.log("el precio esta ok");
    
}else{
    console.log("muy caro hoy solo tomo cafe");
}
//EVALUO MI CONDICION ? VERDADERO : FALSO
precioPan <= 0.2 ? console.log("ok") : console.log("caro");

var locompro = precioPan <= 0.2 ? true : false;


