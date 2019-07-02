window.onload = function () {
    var btnTraerDatos = document.getElementById("btnTraerDatos");
    var divTabla = document.getElementById("tabla");


    function dibujarTabla(usuarios) {
        divTabla.innerHTML = "";
        var table = document.createElement("table");
        divTabla.prepend(table);
        table.setAttribute("class", "table")
        table.innerHTML = `<tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                                <th>Foto</th>
                            </tr>`;
        for (let i = 0; i < usuarios.length; i++) {
            var tr = document.createElement("tr");

            var tdId = document.createElement("td");
            tdId.innerHTML = usuarios[i].id;
            tr.appendChild(tdId);

            var tdNombre = document.createElement("td");
            tdNombre.innerHTML = usuarios[i].first_name;
            tr.appendChild(tdNombre);

            var tdApellido = document.createElement("td");
            tdApellido.innerHTML = usuarios[i].last_name;
            tr.appendChild(tdApellido);

            var tdEmail = document.createElement("td");
            tdEmail.innerHTML = usuarios[i].email;
            tr.appendChild(tdEmail);

            var img = document.createElement("img");
            img.setAttribute("src", usuarios[i].avatar);

            var tdImagen = document.createElement("td");
            tdImagen.appendChild(img);

            tr.appendChild(tdImagen);

            table.appendChild(tr);

        }
    }


    btnTraerDatos.onclick = function () {

        // Creando un objeto XMLHttpRequest
        var xhr = new XMLHttpRequest();
        // readyState => 0 // el objeto solo ha sido creado
        // readyState => devuelve el valor del estado actual del objeto
        // XMLHttpRequest
        console.log(xhr.readyState);
        // onreadystatechange, escucha todos los estados por los que
        // la variable XHR pasa luego de ser creada
        xhr.onreadystatechange = function () {

            switch (xhr.readyState) {
                case 1:
                    console.log("Se ha ejecutado la función open");
                    break;
                case 2:
                    console.log("Se ha disparado la petición http");
                    divTabla.innerHTML = "";
                    var gif = document.createElement("img");
                    gif.src = "loading.gif"
                    divTabla.appendChild(gif);
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
                    console.log(json.data);
                    dibujarTabla(json.data);
                    break;
            }

        }
        
        // onprogress => funcion que se ejecuta tantas veces como bytes
        // contenga la información de la respuesta del servidor
        xhr.onprogress = function(evento){
            // el progreso puede ser medido
            if(evento.lengthComputable){
                var progreso = (evento.loaded / evento.total)*100;
                console.log(progreso);
            }
        }

        // Configura el método o verbo de acceso a una 
        // determinada dirección o URL
        xhr.open("GET", "https://reqres.in/api/users?page=2");
        // readyState => 1 // el objeto ha configurado su metodo y destino
        // Envía o ejecuta las cabeceras para el método open
        xhr.send(null);
        // readyState => 2 // El objeto ha ejecutado la petición a la
        // ruta configurada en el método open


    }




}