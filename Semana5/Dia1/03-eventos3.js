// TIPOS DE EVENTOS
// onload => evento que se ejecuta cuando todos los elementos
// internos de un elemento padre, se han cargado en el DOM

window.onload = function(){
    
    var cuadrado = document.getElementById("cuadrado");
    // mousemove => evento que se ejecuta cuando el mouse
    // pasa por encima de un elemento
    cuadrado.addEventListener('mousemove',function(e){
        console.log("X ->" + e.offsetX);
        console.log("Y ->" + e.offsetY);
    });

    var lapiz = document.getElementById("lapiz"); 
    var body = document.querySelector("body");
    body.onmousemove = function(e){
        console.log("X ->" + e.offsetX);
        console.log("Y ->" + e.offsetY);
        lapiz.style.left = `${e.offsetX}px`;
        lapiz.style.top = `${e.offsetY-200-100}px`;
        // crear divs circulares para marcar el trazo
        var trazo = document.createElement("div");
        trazo.style.height = "2px";
        trazo.style.width = "2px";
        trazo.style.borderRadius = "50%";
        trazo.style.backgroundColor = "red";
        trazo.style.position="absolute";
        trazo.style.left = `${e.offsetX}px`;
        trazo.style.top = `${e.offsetY}px`;
        this.appendChild(trazo);
    }
};