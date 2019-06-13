//una costurera gastara X cantidad de tela para 
/*elaborar un traje a un costo de 10 el metro

va a tener un 15% de ganancia.
si es varon aumentará el precio un 30%
si es mujer aumentará el precio solo un 15%
si es un niño no tendrá ningún aumento
en caso de ser adulto si la talla es L aumentará
un 10% adicional
consideren a partir de 5 metros que es Large
cuanto es el costo final???????
*/
var tela = 3;
var genero = "M";
var nino = false;
var costoUnitario = 10;
var ganancia = 1.15;
var costmujer=1.15;
var costvaron=1.3;
var costL=1.10;
var precosto;

if (nino==true){
	console.log(tela*costoUnitario*ganancia);
}else if(genero == "F" && tela >= 5){
	console.log(tela*costoUnitario*ganancia*costmujer*costL);
}else if(genero == "M" && tela >= 5){
	console.log(tela*costoUnitario*ganancia*costvaron*costL);
}else if(genero == "F"){
	console.log(tela*costoUnitario*ganancia*costmujer);
}else if(genero == "M"){
	console.log(tela*costoUnitario*ganancia*costvaron);
}

if(nino==true){
	console.log(tela*ganancia);
}else if(genero=="M"){
	precosto = tela*costoUnitario*ganancia*costvaron;
	if(tela>=5){
		console.log(precosto*costL);
	}else{
		console.log(precosto);
	}
}else{
	precosto = tela*costoUnitario*ganancia*costmujer;
	if(tela>=5){
		console.log(precosto*costL);
	}else{
		console.log(precosto);
	}
}





/*
if(condicionales){

}else if(aún mas condicionales){

}else{

}
*/
// ejemplito else if  --->>>
var comida="patata";

if(comida == "camote"){
	console.log("es camote");
}else if(comida == "patata"){
	console.log("es patata");
}else{
	console.log("no es ni patata ni camote");
}
