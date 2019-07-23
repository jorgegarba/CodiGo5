let sumar = (a: number, b: number): number => {
    return a + b;
}

let rpta: number = sumar(4, 5);

let mostrarDatos = (persona: any) => {
    console.log(persona.nombre);
    console.log(persona.apellido);
}

mostrarDatos({nombre:"Jorge",apellido:"Garnica"});

let retornarArreglo = ():Array<number> => {
    return [1,3,4,4];
}
