let sumar = (a, b) => {
    return a + b;
};
let rpta = sumar(4, 5);
let mostrarDatos = (persona) => {
    console.log(persona.nombre);
    console.log(persona.apellido);
};
mostrarDatos({ nombre: "Jorge", apellido: "Garnica" });
let retornarArreglo = () => {
    return [1, 3, 4, 4];
};
