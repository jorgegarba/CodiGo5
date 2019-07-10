$(function(){
    //draggable, permitirá que el elemento pueda ser movido de su posición, mientras lo estemos arrastrando
    $(".cuadrado").draggable();

    //rezisable, nos permite cambiar el tamaño del elemento, a partir de agregar un icono en la esquina inferior derecha.
    $(".cuadrado").resizable();

    //sortable, nos permitirá arrastrar los elementos, soltarlos y así cambiar su orden
    $(".actrices").sortable({
        update:function(){
            console.log("Ha cambiado el ranking!");
        }
    });

    $(".cajita").draggable();

    //droppable, nos permitirá recibir elementos con draggable y adicionalmente podemos ejecutar código al ocurrir este evento con la propiedad drop
    $(".caja").droppable({
        drop:function(evento){
            console.log("Ha entrado alguien!!!");
            console.log(evento);
            $(this).css("background-color","yellow");
            $(this).css("border","3px solid blue");
        }
    });
    //effect y toggle, nos permitirán añadir animaciones a nuestros elementos
    $("#btnAnimate").click(function(){
        // $(".objetivo:eq(0)").toggle("fold");
        // $(".objetivo:eq(0)").toggle("bind");
        $(".objetivo:eq(0)").effect("explode");
    });

    $("#btnAnimar2").click(function(){
        // $(".objetivo2").toggle("slide",2500);
        // $(".objetivo2").toggle("puff");
        $(".objetivo2").toggle("shake",100);
    });
    //Va mostrar información cuando se ponga el cursos encima, siempre y cuando el elemento tenga el atributo title, mostrando el valor de title
    $("#imagen").tooltip();

    //dialog,
    $("#btnDialog").click(function(){
        $("#ventanita").dialog({
            // modal:true,
            resizable:false,
            draggable:false,
            closeOnEscape:true,
            buttons:{
                Aceptar:function(){
                    $(this).dialog("close");
                    console.log("Hizo click en aceptar");
                },
                "Desea salir":function(){
                    $(this).dialog("close");
                    console.log("Se hizo click en Salir");
                }
            }
        }
        );
    });
})

