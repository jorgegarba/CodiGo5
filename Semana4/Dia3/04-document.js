// OBJETO DOCUMENT
// Representa al DOM
// getElementById()
// El tipo de dato del div será "Element"
var div = document.getElementById("miDiv");
console.log(div);

// getElementsByClassName
// => obtiene todos los elementos con el nombre de clase dado

var parrafos = document.getElementsByClassName("parrafo");
console.log(parrafos);

// getElementsByTagName
// => obtiene todos los elementos con el nombre de la etiquera dada
var h1s = document.getElementsByTagName("h1");
console.log(h1s);

// querySelector
// => Obtiene un elemento dado un selector de tipo css
var resultado = document.querySelector(".parrafo");
console.log(resultado);
// querySelectorAll
// => Obtiene todos elementos dado un selector de tipo css
var resultados = document.querySelectorAll(".parrafo");
console.log(resultados);