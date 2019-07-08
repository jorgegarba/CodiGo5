var cuadrado = $("#cuadrado");
$("#btnAnimarCuadrado").click(function () {
    cuadrado.animate({
        contador: 100
    }, {
            duration: 2000,
            step: function (valorContador) {
                // let widthActual = cuadrado.css("width");
                // widthActual = widthActual.split("p")[0];                
                cuadrado.css("width", `${valorContador + 100}px`);
            }
        })
});


$("#llenarBarra").click(function(){
    $("#contenido").animate(
        {
            contador:100,
        },
        {
            duration: 3000,
            step : function(i){
                $("#contenido").css("width",`${i}%`);
                $("#cuadrado").html(`Cargando ${i.toFixed(0)}%`);
            }
        }
    )
})