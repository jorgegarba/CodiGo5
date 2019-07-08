function traerAulas() {
    $.ajax({
        type: "GET",
        url: "http://5d1cd485f31e7f00147ebb7a.mockapi.io/aulas",
        timeout: 1500,
        data: null,
        success: function (respuesta) {
            console.log(respuesta);
            // ocultar gif de carga
        },
        error: function (error) {
            console.error(error);
        },
        beforeSend: function () {
            console.log("Antes de enviar la data");
            // mostrar gif de carga
        }
    })
}


function crearAula() {

    let objAula = {
        aula_numero: $("#inputNumero").val(),
        aula_tipo: $("#selectTipo").val() === "l" ? true : false,
        aula_capacidad: $("#inputCapacidad").val(),
        aula_nombre: $("#inputNombre").val()
    }

    $.ajax({
        type: "POST",
        url: "http://5d1cd485f31e7f00147ebb7a.mockapi.io/aulas",
        timeout: 1500,
        data: JSON.stringify(objAula),
        contentType:"application/json",
        success: function (respuesta) {
            console.log(respuesta);
            // ocultar gif de carga
        },
        error: function (error) {
            console.error(error);
        },
        beforeSend: function () {
            console.log("Antes de enviar la data");
            // mostrar gif de carga
        }
    })
}

$("#btnCrear").click(function (e) {
    e.preventDefault();
    crearAula();
});

traerAulas();