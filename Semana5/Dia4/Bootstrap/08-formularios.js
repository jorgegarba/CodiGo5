window.onload = function(){
    var inputNombre = document.getElementById("inputNombre");
    var helpNombre = document.getElementById("helpNombre");
    var inputMensaje = document.getElementById("inputMensaje");
    var helpMensaje = document.getElementById("helpMensaje");
    // declarar un arrelgo de personas (objetos)
    var personas = [
        {
            nombre:"Jorge",
            correo:"jgarnica@gmail.com"
        },{
            nombre:"Carlos",
            correo:"ccaceres@gmail.com"
        },{
            nombre:"Pamelita",
            correo:"ppuma@gmail.com"
        }
    ];
    // Desarrollar el algoritmo para que el usuario, luego
    // de introducir las 3 primeras letras del campo nombre,
    // valide si dicho nombre está o no, disponible.
    // si el nombre ya existe en el arreglo de objetos.
    // el texto de ayuda deberá mostrar un error
    // si el nombre no existe en el arreglo de objetos,
    // el texto de ayuda deberá mostrar un mensaje de éxito
    // y/o disponibilidad del nombre.

    function buscarNombre(nombre){
        for (let i = 0; i < personas.length; i++) {
            if(nombre.toLowerCase() === personas[i].nombre.toLowerCase()){
                return true;
            }
        }
        return false;
    }

    inputNombre.onkeyup = function(){
        if(this.value.length >= 3){
            helpNombre.removeAttribute("hidden");
            // hacer analisis
            var rpta = buscarNombre(this.value);
            if(rpta===true){
                // ya existe el nombre // error
                helpNombre.className = "form-text text-danger";
                helpNombre.innerHTML = "El nombre no está disponible siñorsh";
            }
            else{
                // el nombre esta disponible
                helpNombre.className = "form-text text-success";
                helpNombre.innerHTML = "El nombre está disponible";
            }
        }else{
            // no hacer nada
            helpNombre.setAttribute("hidden","true");
        }
    }

    inputMensaje.onkeyup = function () {
        var tamanio = this.value.length;
        helpMensaje.innerHTML = `Quedan ${20-tamanio} caracteres.`;
    };
}