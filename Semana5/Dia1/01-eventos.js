// Evento es un conjunto de instrucciones que se van a ejecutar
// cuando un elemento sea afectado por
// comportamiento definido por el usuario
// Formas de asignar un evento
// 1. addEventListener
var cuadrado = document.getElementById("cuadrado");
// elemento.addEventListener("[nombre_del_evento]",funcion anonima del evento);
function mostrarMensaje(){
    alert("Mostrando un mensaje");
}
cuadrado.addEventListener("click", mostrarMensaje);



// 2. Asignando el evento mediante la propiedad del elemento
var circulo = document.getElementById("circulo");
// elemento.[nombre_del_evento] = funcion anonima
// al nombre_del_evento, se le agrega el prefijo "on"
circulo.onclick = function(){
    console.error("Mostrando un error")
};