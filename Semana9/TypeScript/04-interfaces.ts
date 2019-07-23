interface iPersona {
    nombre:string;
    apellido:string;
    edad?:number;
}
let mostrarDatos = (persona:iPersona) => {
    console.log(persona.nombre);
    console.log(persona.apellido);
    if(persona.edad){console.log(persona.edad);}
}
let objPersona:iPersona = {nombre:"Jorge", apellido:"Garnica"};
mostrarDatos(objPersona);