let mostrarDatos = (persona) => {
    console.log(persona.nombre);
    console.log(persona.apellido);
    if (persona.edad) {
        console.log(persona.edad);
    }
};
let objPersona = { nombre: "Jorge", apellido: "Garnica" };
mostrarDatos(objPersona);
