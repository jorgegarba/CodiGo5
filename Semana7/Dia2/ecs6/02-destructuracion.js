// destructuracion de arreglos
let numeros = [69, 100, ["a","b","c"], 8, 88, 56];
// forma tradicional de obtener los valores de 
// un arreglo
let x = numeros[2];
let y = numeros[3];
//destructurando el arreglo
let [uno,dos, [aa,bb,cc] , ...resto] = numeros;
console.log(`${uno} - ${dos}`);
console.log(resto);
console.log(aa);
console.log(bb);
console.log(cc);

// destucturacion de objetos
console.log("/////// DESSTRUCTURANDO OBJETOS //////");

let objPersona = {
    nombre:"Jorge",
    apellido:"Garnica",
    edad:20,
    dni:"90909090",
    nacionalidad:{
        pais:"Peru",
        gentilicio:"Peruca"
    },
    gustos:["cebiche","aji de gallina","thimpo"]
};
// forma tradicional de obtener el valor de una
// propiedad de un objeto
let name = objPersona.nombre;
// destructuando el objeto
let {edad,nombre:nuevoNombre} = objPersona;
let {nacionalidad:{pais}} = objPersona;
let {gustos:[,segundo]} = objPersona;

console.log(nuevoNombre);
console.log(edad);
console.log(pais);
console.log(segundo);

function getPersona({dni}){
    console.log(dni);
}

getPersona(objPersona);