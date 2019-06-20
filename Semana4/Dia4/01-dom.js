var div = document.getElementById("miDiv");
// ancho de un elemento
console.log(div.clientWidth);
// alto de un elemento
console.log(div.clientHeight);
// ancho de un elemento incluido sus bordes
console.log(div.offsetWidth);
// alto de un elemento incluido sus bordes
console.log(div.offsetHeight);
// posicion del elemento con referencia al top
console.log(div.scrollTop);
// posicion del elemento con referencia a left
console.log(div.scrollLeft);

// como asignar el evento click a un elemento
var boton = document.getElementById("boton");

boton.addEventListener("click",function(){
    div.style.height = `${div.clientHeight+2}px`;
    div.style.position = "relative";
    div.style.left = "30px";
});