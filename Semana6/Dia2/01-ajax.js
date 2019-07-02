window.onload = function () {
    var btnTraerDatos = document.getElementById("btnTraerDatos");

    btnTraerDatos.onclick = function () {
        // Creando un objeto XMLHttpRequest
        var xhr = new XMLHttpRequest();
        // readyState => 0 // el objeto solo ha sido creado
        // readyState => devuelve el valor del estado actual del objeto
        // XMLHttpRequest
        console.log(xhr.readyState);
        // onreadystatechange, escucha todos los estados por los que
        // la variable XHR pasa luego de ser creada
        xhr.onreadystatechange = function(){
            
            switch(xhr.readyState){
                case 1:
                    console.log("Se ha ejecutado la función open");
                    break;
                case 2:
                    console.log("Se ha disparado la petición http");
                    break;
                case 3:
                    console.log("Cargando la data...");
                    break;
                case 4:
                    console.log("la data llegó =)");
                    // status => codigo de estado HTTP
                    // ver listado de codigos de estado
                    console.log("codigo de estado => " + xhr.status);
                    console.log("Mostrando la data resultado");

                    // responseText => texto de respuesta del servidor
                    var json = JSON.parse(xhr.responseText);
                    console.log(json);
                    break;
            }

        }
        // Configura el método o verbo de acceso a una 
        // determinada dirección o URL
        xhr.open("GET","https://reqres.in/api/users?page=2");
        // readyState => 1 // el objeto ha configurado su metodo y destino
        // Envía o ejecuta las cabeceras para el método open
        xhr.send(null);
        // readyState => 2 // El objeto ha ejecutado la petición a la
        // ruta configurada en el método open
        

    }


}