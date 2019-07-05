// seleccionando un elemento dado su id
// funcion html() SET/GET de innerHTML
var btnCambiarColor = $("#btnCambiarColor");
var btnModificarParrafo = $("#btnModificarParrafo");
var btnSinClase = $("#btnSinClase");

// ERROR => los objetos de tipo JQuery, no poseen
// las mismas funciones que los objeto javascript nativos
// btnCambiarColor.innerHTML ="asdasdasd";

// asignar el innerHTML de un elemento
btnCambiarColor.html("Nuevo Color");
// // obtener el innerHTML  de un elemento
console.log(btnCambiarColor.html());
// asignando el evento click a un boton jquery
btnCambiarColor.click(function(){

    // seleccionando todos los elementos "p"
    let parrafos = $("p");
    // Asignando estilos a uno o mas elementos jquery
    parrafos.css("color","#ff0000").css("text-align","justify");
    

});

btnModificarParrafo.click(function(){

    // seleccionando el tercer parrafo
    var tercerParrafo = $("p:eq(2)");
    tercerParrafo.css("background-color","#554423");

})


btnSinClase.click(function(){ 
    
    // colocar clase de boton de bootstrap
    // FUNCION analoga a setAttribute
    $(this).attr("class", "btn btn-warning btn-block");
    // añadiendo las 3 clases por separado
    $(this).addClass("btn")
            .addClass("btn-danger")
            .addClass("btn-block");

});


$("p:eq(0)").click(function () { 
    // toggle de una clase(interruptor)
    $(this).toggleClass("btn btn-primary");
    
});