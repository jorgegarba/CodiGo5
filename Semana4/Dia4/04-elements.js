//document.createElement => Crear un elemento
//de tipo Element

var header = document.getElementById("header");

var titulo = document.createElement("h2");

titulo.className = "titulo";
titulo.classList.add("titulo");
titulo.id = "miTitulo";

titulo.innerHTML = "Titulo de la App";

//appendChild() => agrega un elemento hijo a otro elemento 
// Agrega el elemento como ultimo hijo
header.appendChild(titulo);

// preppend() => agregar un elemento hijo a otro elemento
// Agrega el elemento como primer hijo.
var h1 = document.createElement("h1");
h1.innerHTML = "Titulo principal";
header.prepend(h1);

console.log(header);

var lista = [{
    nombre: 'Karlita',
    apellido: 'Muñoz',
    edad: 27
}, {
    nombre: 'Camila',
    apellido: 'Quiroz',
    edad: 29
}];
var tabla = document.getElementById("alumnos");

function generarTabla() {
    
    tabla.innerHTML = "<tr><th>Nombre</th><th>Apellido</th><th>Edad</th></tr>";

    for (let i = 0; i < lista.length; i++) {
        var tr = document.createElement("tr");

        var tdNombre = document.createElement("td");
        tdNombre.innerHTML = lista[i].nombre;
        tr.appendChild(tdNombre);

        var tdApellido = document.createElement("td");
        tdApellido.innerHTML = lista[i].apellido;
        tr.appendChild(tdApellido);

        var tdEdad = document.createElement("td");
        tdEdad.innerHTML = lista[i].edad;
        tr.appendChild(tdEdad);

        tabla.appendChild(tr);
    }
}

generarTabla();


var btnAgregar = document.getElementById("agregar");
btnAgregar.addEventListener("click", function () {
    var iNombre = prompt("Ingrese el nombre");
    var iApellido = prompt("Ingrese el apellido");
    var iEdad = prompt("Edad");

    var objAlumno = {
        nombre: iNombre,
        apellido: iApellido,
        edad: iEdad
    };

    lista.push(objAlumno);
    console.log(lista);
    generarTabla();
});



var input = document.getElementById("miInput");
console.log(input.value);
input.value = "Nuevo Nombre";
