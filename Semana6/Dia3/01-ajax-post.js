window.onload = function () {
    var btnCrear = document.getElementById("btnCrear");
    var inputNombre = document.getElementById("inputNombre");
    var inputCargo = document.getElementById("inputCargo");
    var alertas = document.getElementById("alertas");

    btnCrear.onclick = function (evento) {
        evento.preventDefault();

        var objUsuario = {
            name: inputNombre.value.trim(),
            job: inputCargo.value.trim()
        };

        var xhr = new XMLHttpRequest();
        // Estableciento un tiempo limite de espera
        // en milisegundos
        xhr.timeout = 1000;
        xhr.ontimeout = function () {
            console.error("Se agotó el tiempo de espera...");
        }

        xhr.onreadystatechange = function () {
            switch (xhr.readyState) {
                case 1:
                    break;
                case 2:
                    console.log("sen enviaron los datos");
                    break;
                case 3:
                    console.log("cargando...");
                    break;
                case 4:
                    if (xhr.status === 201) {
                        var json = JSON.parse(xhr.responseText);
                        console.log(json);
                        alertas.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Hecho!</strong> El usuario <strong>${json.name}</strong>, ha sido creado correctamente.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>`;
                    }
            }
        }
        xhr.open("POST", "https://reqres.in/api/users");

        // Cuando se envía información al servidor a través del
        // método POST, PUT, PATCH, DELETE, UPDATE
        // Debe establecerse la información o cabecera
        // para que el backend esté informado del tipo de dato
        // o contenido que está recibiendo.

        xhr.setRequestHeader("Content-Type", "application/json");

        // enviando el objeto JSON en formato STRING 
        xhr.send(JSON.stringify(objUsuario));
    };
}