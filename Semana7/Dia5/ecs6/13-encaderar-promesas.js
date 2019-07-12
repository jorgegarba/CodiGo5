let alumnos = [{ id: 1, nombre: "Jorgito", edad: 24 },
{ id: 2, nombre: "Carlitos", edad: 20 },
{ id: 3, nombre: "Juanito", edad: 23 }];


let cursos = [
    { alumnoId: 1, cursos: ["POO", "Inteligencia de Negocios"] },
    { alumnoId: 2, cursos: ["Algoritmia", "Matematicas Discretas"] }
];


let getAlumnoById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < alumnos.length; i++) {
                if (alumnos[i].id === id) {
                    resolve(alumnos[i]);
                    return;
                }
            }
            reject("El alumno no existe");
        }, 3000);
    })
}
let getCursosByAlumnoId = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            for (let i = 0; i < cursos.length; i++) {
                if (cursos[i].alumnoId === id) {
                    resolve(cursos[i])
                    return;
                }
            }
            reject("No existen cursos para el alumno");
        }, 2000);

    })
}


// getAlumnoById(1).then((objAlumno) => {
//     console.log(objAlumno);
//     getCursosByAlumnoId(1).then(({ cursos }) => {
//         console.log(cursos);
//     }).catch((error) => {
//         console.log(error);
//     });
// }).catch((error) => {
//     console.log(error);
// })


getAlumnoById(1).then(objAlumno => {
                    console.log(objAlumno);
                    return getCursosByAlumnoId(10);
                }).then((objCurso) => {
                    console.log(objCurso);
                }).catch(error=>{
                    console.log(error);
                });

