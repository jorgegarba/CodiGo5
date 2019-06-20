var btnIzquierda = document.getElementById("btnIzquierda");
var btnArriba = document.getElementById("btnArriba");
var btnAbajo = document.getElementById("btnAbajo");
var btnDerecha = document.getElementById("btnDerecha");
var contenedor = document.getElementById("contenedor");
var contenido = document.getElementById("contenido");

function analizarColision(){
    if(contenido.offsetLeft < 0 ||
        contenido.offsetTop < 0 ||
        (contenido.offsetLeft+contenido.offsetWidth)>contenedor.offsetWidth ||
        (contenido.offsetTop+contenido.offsetHeight)>contenedor.offsetHeight)
    {
        alert("PERDISTE");
    }
}

btnDerecha.addEventListener("click",function(){
    console.log(contenido.offsetLeft);
    contenido.style.left = `${contenido.offsetLeft+10}px`;
    //analisis de si el elemento se ha salido de sus margenes
    analizarColision();
});
btnArriba.addEventListener("click",function(){
    console.log(contenido.offsetTop);
    contenido.style.top = `${contenido.offsetTop-10}px`;
    //analisis de si el elemento se ha salido de sus margenes
    analizarColision();
});
btnAbajo.addEventListener("click",function(){
    console.log(contenido.offsetTop);
    contenido.style.top = `${contenido.offsetTop+10}px`;
    //analisis de si el elemento se ha salido de sus margenes
    analizarColision();
});
btnIzquierda.addEventListener("click",function(){
    console.log(contenido.offsetTop);
    contenido.style.left = `${contenido.offsetLeft-10}px`;
    //analisis de si el elemento se ha salido de sus margenes
    analizarColision();
});