var objPersona1 = {
    nombre: "Jorge",
    edad: 27,
    comidasFavoritas: [
        "Cebiche",
        "Torta de Jamon"
    ],
    dni: "12121212"
};
var objPersona2 = {
    nombre: "David",
    edad: 18,
    comidasFavoritas: [
        "Tilapia",
        "Chaufa"
    ],
    dni: "01828372"
};

var personas = [];
personas.push(objPersona1);
personas.push(objPersona2);

for (var i = 0; i < personas.length; i++) {
    personas[i].dni = "00000000";
    console.log("Nombre " + personas[i].nombre);
}

console.log(personas);