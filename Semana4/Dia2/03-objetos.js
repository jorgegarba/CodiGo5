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


var objVehiculo = {
    marca:"Mazda",
    modelo:"CX-3",
    color:"Gris",
    mantenimientos:[
        {
            fecha:"18-01-2019",
            estado:"Sin observaciones"
        },
        {
            fecha:"18-02-2019",
            estado:"Sin observaciones"
        }
    ]
}

console.log(objVehiculo);

var objMantenimiento = {
    fecha:"10-10-19",
    estado:"Sin obs"
};

objVehiculo.mantenimientos.push(objMantenimiento);

console.log(objVehiculo);

