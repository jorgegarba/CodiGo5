var cuadrado = document.getElementById("cuadrado");
var circulo = document.getElementById("circulo");

function click(e){
    // Asignando un atributo y valor a un elemento
    // elemento.setAttribute("id","5");
    // obteniendo el valor de un atributo de un elemento
    // elemento.getAttribute("id");

    console.log(e);
    // Imprimir el objetivo del evento
    console.log(e.target.getAttribute("nro"));
    if(e.target.getAttribute("id") === "cuadrado"){
        console.log("cuadrado");
    }else{
        console.log("circulo");
    }
    // Imprimir las coordedanas respecto de la ventana de donde el mouse
    // Hizo click
    console.log("X => " + e.clientX + " respecto de la ventana");
    console.log("Y => " + e.clientY + " respecto de la ventana");

    // Imprimir las coordedanas respecto del elemento de donde el mouse
    // Hizo click
    console.log("X => " + e.offsetX + " respecto del elemento");
    console.log("Y => " + e.offsetY + " respecto del elemento");

    // Imprimir un mensaje si es que el click se hizo presionando la tecla
    // Alt
    if(e.altKey === true){
        console.log("El click se hizo presionando la tecla Alt");
    }
    if(e.ctrlKey === true){
        console.log("El click se hizo presionando la tecla Ctrl");
    }
    if(e.shiftKey === true){
        console.log("El click se hizo presionando la tecla Shift");
    }

    // e.target es equivalente al objeto "this"
    console.log(this);
}

// asignano una misma funcion de evento a dos elementos distintos
cuadrado.onclick = click;
circulo.onclick = click;