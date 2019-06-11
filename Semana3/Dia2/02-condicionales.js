

/*CONDICIONALES
if  -> si cumple
else -> si no cumple
Comparadores::::
< menorque
>mayor que
<= menor igual
>=mayor igual
== igual solo el valor, no confundir con solo un =
=== igual tanto en valor, si no también en el tipo de dato
!= diferente pero solo en valor;
!== es diferente en valor y también en el tipo de Dato

COMPARADORES LÓGICOS
&& -> es equivalente a un Y ó a un AND
|| -> equivalent a Ó u OR, y es una opción más
! -> equivalente a Negacion o NOT
*/
var edad = 17;

if(edad<=17){
    console.log("noup que se vaya a limpiar los mocos");
}else{
    console.log("pasale el trago");
}
// comparando valores y tipos de dato

var x = 5; //número
var y = "5"; //string texto

console.log(x==y);
console.log(x===y);

var x = 90;
var y = 75;
var z = 101;

if((x>=y && x>=z) || (z>=y && z>=x && z!=101)) {
    console.log("valido");
}else{
    console.log("falso");
}

// tiene que ser múltiplo de 4 y no tiene que ser múltiplo de 100, pero en todo caso tiene que ser multiplo de 400;

var anio= 2018;

if(((anio%4==0) && (anio%100!=0)) || (anio%400==0)){
    console.log(anio + " es bisiesto");
}else{
    console.log(anio + " no es bisiesto");
}

