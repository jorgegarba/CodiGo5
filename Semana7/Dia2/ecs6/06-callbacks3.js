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



let getAlumnoById = (id, callback) => {
    
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].id === id) {
            callback(null, alumnos[i]);
            return;
        }
    }
    callback("El alumno no existe");
}

let getCursosByAlumnoId = (id,callback)=>{
    for (let i = 0; i < cursos.length; i++) {
        if (cursos[i].alumnoId === id) {
            callback(null, cursos[i])
            return;
        }
    }
    callback("No existen cursos para el alumno");
}




getAlumnoById(1, (error, objAlumno) => {
    if (error) {
        console.log(error);
    } else {
        getCursosByAlumnoId(1,(error,listaCursos)=>{
            if(error){
                console.log(error);
                console.log(`Se encontró al alumno ${objAlumno.nombre}
                            pero no tiene cursos matriculados`);
            }else{
                console.log(`Se encontró a ${objAlumno.nombre} y
                  tiene los siguientes cursos`);
                console.log(listaCursos.cursos);
            }
        })
    }
});