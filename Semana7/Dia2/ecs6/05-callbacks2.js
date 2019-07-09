let alumnos = [{ id: 1, nombre: "Jorgito", edad: 24 },
{ id: 2, nombre: "Carlitos", edad: 20 },
{ id: 3, nombre: "Juanito", edad: 23 }];

let getAlumnoById = (id, callback) => {
    for (let i = 0; i < alumnos.length; i++) {
        if(alumnos[i].id === id){
            callback(null,alumnos[i]);
            return;
        }
    }
    callback("El alumno no existe");
}

getAlumnoById(90,(error,objAlumno)=>{
                        if(error){
                            console.log(error);
                        }else{
                            console.log(objAlumno.nombre);
                        }
                    });