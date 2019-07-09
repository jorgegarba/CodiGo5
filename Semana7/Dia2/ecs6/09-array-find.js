// [Array].find(()=>{})
// el callback, recibe los mismos parametros
// que la función forEach
// Función que recorre un arreglo y termina
// al econtrar la primera ocurrencia dado un comparador
// además, retorna el elemento encontrado

let alumnos = [{ id: 1, nombre: "Jorgito", edad: 24 },
{ id: 2, nombre: "Carlitos", edad: 20 },
{ id: 3, nombre: "Juanito", edad: 23 },
{ id: 4, nombre: "Pepito", edad: 20 }];

// buscar al alumno que tenga 20 anios
let encontrado = alumnos.find((alumno)=>{
    return alumno.edad === 20
});

console.log(encontrado);
