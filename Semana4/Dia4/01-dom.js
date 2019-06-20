var div = document.getElementById('miDiv');
// ancho de un elemento
console.log(div.clientWidth);
// alto de un elemento
console.log(div.clientHeight);
// ancho de un elemento incluido sus bordes
console.log(div.offsetWidth);
// alto de un elemento incluido sus bordes
console.log(div.offsetHeight);
// cantidad de pixeles que un elemento se ha
// desplazado desde la izquierda de su contenedor
console.log(div.offsetLeft);
// cantidad de pixeles que un elemento se ha
// desplazado desde la parte superior
// de su contenedor
console.log(div.offsetTop);
// posicion del elemento con referencia al top
console.log(div.scrollTop);
// posicion del elemento con referencia a left
console.log(div.scrollLeft);

// como asignar el evento click a un elemento
var boton = document.getElementById("boton");

boton.addEventListener("click",function(){
    div.style.height = `${div.clientHeight+2}px`;
    div.style.position = "relative";
    div.style.left = `${div.offsetLeft+2}px`;
});
// className => declarar u obtener la clase del
// elemento
var btnCambiarClase = document.getElementById("cambiarClase");
btnCambiarClase.addEventListener("click",function(){
    if(div.className == "nuevaClase"){
        div.className = "miDiv";
    }else{
        div.className = "nuevaClase";
    }
});
//classList => devuelve un array con las clases
// que tiene un elemento
var multiclase = document.querySelector("#multiclase");
// classList.add("nombreDeLaClaseAAgregar")
var agregarClase = document.getElementById("agregarClase");
agregarClase.addEventListener("click",function(){
    multiclase.classList.add("rotar");
});
// classList.remove("nombreDeLaClaseAEliminar")
var quitarClase = document.getElementById("quitarClase");
quitarClase.addEventListener("click",function(){
    multiclase.classList.remove("rotar");
});