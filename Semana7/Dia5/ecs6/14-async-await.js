let alumnos = [{ id: 1, nombre: "Jorgito", edad: 24 },
{ id: 2, nombre: "Carlitos", edad: 20 },
{ id: 3, nombre: "Juanito", edad: 23 }];

let cursos = [{
    alumnoId: 1,
    cursos: ["POO", "Inteligencia de Negocios"]
}, {
    alumnoId: 2,
    cursos: ["Algoritmia", "Matematicas Discretas"]
}];


// El prefijo "async" a una función normal, la transforma en una 
// promesa
// Como no existen los callbacks "resolve" ni "reject"
//  la palabra "return" equivale a "resolve"
// la palabra "throw" equivale a "reject"
let getAlumnoById = async (id) => {
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].id === id) {
            return alumnos[i];
        }
    }
    throw "El alumno no existe";
}

let getCursosByAlumnoId = async (id)=>{
    for (let i = 0; i < cursos.length; i++) {
        if (cursos[i].alumnoId === id) {
            return cursos[i];
        }
    }
    throw "No existen cursos para el alumno";
}

let getDatos = async ()=>{
    let alumno = await getAlumnoById(1);
    let cursos = await getCursosByAlumnoId(1);
    console.log(alumno);
    console.log(cursos);
    return [alumno,cursos];
}

getDatos().then(([alumno,cursos])=>{
    console.log(alumno);
    console.log(cursos);
}).catch((error)=>{
    console.log(error);
})


