window.onload = function () {


    function dibujarPabellones(pabellones) {
        var listaPabellones = $("#listaPabellones");
        
        for(let i = 0;  i<pabellones.length; i++){
            let li = $("<li></li>");
            li.attr("class","list-group-item d-flex justify-content-between align-items-center");
            li.html(`Pabellon ${pabellones[i].pab_nom}
            <span class="badge badge-danger badge-pill">60 ocupados</span>
            <span class="badge badge-success badge-pill">10 libres</span>`);

            listaPabellones.append(li);
        }
        
    }

    function traerPabellones() {
        $.ajax({
            type: "GET",
            url: "http://5d1cd485f31e7f00147ebb7a.mockapi.io/pabellones",
            timeout: 1500,
            data: null,
            success: function (pabellones) {
                dibujarPabellones(pabellones);
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




    traerPabellones();

}