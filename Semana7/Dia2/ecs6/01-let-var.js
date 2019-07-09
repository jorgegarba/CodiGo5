
// variables de ambito global
var numero;

console.log(numero);
console.log(nombre);
// console.log(apellido);

// variable que pasa su valor por referencia
var nombre = "Luis";
let apellido = "Blanco";

if(true){
    console.log(nombre);
    // console.log(apellido);

    var nombre = "Carlos";
    let apellido = "Tapia";
    console.log(apellido);

    let edad = 13;
    console.log(edad);
    for(var i=0; i<3; i++){
        console.log(i);
    }
    console.log(i);
}

console.log(nombre);
console.log(apellido);

try {
    // intenta ejecutar un codigo potencialmente
    // peligroso o que pueda generar un error
    console.log(edad);    
} catch (error) {
    console.error(error);
}

console.log("adios");