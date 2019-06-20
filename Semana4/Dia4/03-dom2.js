var parrafo1= document.getElementById("parrafo1");
var parrafo2= document.getElementById("parrafo2");

// innerHTML => devuelve o settea el contenido de un 
// elemento HTML, es decir, lo que contiene su etiqueta
console.log(parrafo1.innerHTML);

parrafo2.innerHTML = "Nuevo contenido";
parrafo1.innerHTML = "<i>El nuevo contenido</i>";

var libros = ["Harry Potter y la piedra filosofal",
              "Ensayo sobre la ceguera",
              "Platero y Yo"];


var resultado = "<ul id='miLista'>";

for (let i = 0; i < libros.length; i++) {
    resultado = resultado + "<li>";
    resultado = resultado + `${libros[i]}`;
    resultado = resultado + "</li>";
}

resultado = resultado + "</ul>";
parrafo2.innerHTML = resultado;