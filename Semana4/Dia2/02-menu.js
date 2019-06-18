function menu(){
    alert(`//MENU//
           1.- Sumar
           2.- Restar
           3.- Salirsh`);
}

function operar(operacion){
    var a = +prompt(`Ingrese el primer numero a ${operacion}`);
    var b = +prompt(`Ingrese el segundo numero a ${operacion}`);
    operacion === "sumar" ? alert(`La suma es ${a+b}`) : alert(`La resta es ${a-b}`);
}

do{
    menu();
    var opcion = +prompt("Elija la opcion del menu");
    if(opcion==1){
        operar("sumar");
    }else if(opcion==2){
        operar("restar");
    }
    
}while(opcion !== 3 );