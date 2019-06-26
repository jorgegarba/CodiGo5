window.onload = function () {

    function miFuncion(){
        return 1+6;
    }

    let obj = {
        x:1,
        y:miFuncion
    }
    localStorage.setItem("prueba",JSON.stringify(obj));

    // localStorage => es como una base de datos
    // en el navegador
    var inputNombre = document.getElementById("inputNombre");
    var inputApellido = document.getElementById("inputApellido");
    var inputColor = document.getElementById("inputColor");
    var inputGuardar = document.getElementById("inputGuardar");
    var body = document.getElementById("cuerpo");
    var btnBorrar = document.getElementById("btnBorrar");

    btnBorrar.onclick = function(e){
        e.preventDefault();
        // Borrando uno o varios elementos del localStorage
        // localStorage.removeItem("[nombre_del_item]");
        // localStorage.clear() => elimina todo el localStorage
        localStorage.removeItem("nombre");
        localStorage.removeItem("apellido");
        localStorage.removeItem("color");
        localStorage.removeItem("preferencias");
        // recargar la pagina
        location.reload();
    }

    /**
     * Funcion que toma los elementos del localStorage
     * de forma independiente
     * es decir, nombre, apellido y color, individualmente
     */
    function cargarPreferencias(){
        // obteniendo un elmeneto del localStorage;
        var colorGuardado = localStorage.getItem("color");
        var nombreGuardado = localStorage.getItem("nombre");
        var apellidoGuardado = localStorage.getItem("apellido");
        if(colorGuardado && nombreGuardado && apellidoGuardado){
            body.style.backgroundColor = colorGuardado;
            inputApellido.value = apellidoGuardado;
            inputNombre.value = nombreGuardado;
            inputColor.value = colorGuardado;
        }else{
            console.log("No habia un color favorito preconfigurado");
        }
    }
    cargarPreferencias();
    /**
     * Funcion que toma el elemento del localStorage
     * en un solo objeto llamado 'preferencias'
     */
    function cargarPreferenciasJSON(){
        var objPreferenciasString = localStorage.getItem("preferencias");
        //JSON.parse([objeto String])=> devuelve un objeto JSON    
        var objPreferenciasJSON = JSON.parse(objPreferenciasString);
        if(objPreferenciasJSON){
            body.style.backgroundColor = objPreferenciasJSON.color;
            inputApellido.value = objPreferenciasJSON.apellido;
            inputNombre.value = objPreferenciasJSON.nombre;
            inputColor.value = objPreferenciasJSON.color;
        }else{
            console.log("No habian preferencias =(");
        }
    }
    cargarPreferenciasJSON();

    inputGuardar.onclick = function(e){
        e.preventDefault();
        // guardando un elemento en el localStorage
        localStorage.setItem("color",inputColor.value);
        localStorage.setItem("nombre",inputNombre.value);
        localStorage.setItem("apellido",inputApellido.value);
        body.style.backgroundColor = `${inputColor.value}`;

        var objPreferencias = {
            nombre: inputNombre.value,
            apellido: inputApellido.value,
            color: inputColor.value
        };

        console.log(objPreferencias);
        // JSON.stringify([objeto]) => devuelve
        // el mismo objeto, convertido a string
        var objPreferenciasString = JSON.stringify(objPreferencias);
        console.log(objPreferenciasString);

        // guardando el objeto luego de haber aplicado la funcion stringify
        localStorage.setItem("preferencias",objPreferenciasString);
    }

}