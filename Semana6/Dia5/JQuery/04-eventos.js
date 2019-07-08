// EVENTO CLICK

$("#btnAgregarClase").click(function(){
    $("ul").css("list-style","none");
    $("ul>li").addClass("vinietas");
});

// EVENTO MOUSEOVER, se produce cuando el mouse esta encima
// del elemento
$("#imagen").mouseover(function () { 
    $(this).addClass("girar");
});

// EVENTO MOUSEOUT, se produce cuando el mouse deja al elemento
$("#imagen").mouseout(function () { 
    $(this).removeClass("girar");
    $("ul>li").removeClass("vinietas");
    // pendiente
});

// EVENTO DOBLE CLICK, se product cuando se da doble click a un elemento
$("ul>li").dblclick(function(){
    $("#inputSelected").val($(this).html());
});

// EVENTO HOVER, resumen en una funcion a los eventos
// MOUSEOVER y MOUSEOUT
$("#switch").hover(
    // mouseover
    function(){
        $("body").css("background-color","azure")
                 .css("color","#444444");
    },
    // mouseout
    function(){
        $("body").css("background-color","#444444")
                 .css("color","#whitesmoke");
    }
);

$("#inputFocus").focus(function(){
    $(this).css("color","white")
            .css("backgroundColor","transparent")
            .css("border","0px")
            .css("outline","none")
            .css("border-bottom","2px solid white")
            .css("padding","5px");
});

$("#inputFocus").blur(function(){
    $(this).css("color","white")
            .css("backgroundColor","transparent")
            .css("border","1px solid white")
            .css("padding","5px");
});


// contextmenu => evento que se ejecuta al momento
//de dar click derecho a un elemento
$("body").contextmenu(function(e){
    e.preventDefault();
    //eliminar los elementos similares
    // si se hubieran creado anteriormente
    $(".menu").remove();

    // crear un elemento con JQuery
    var divMenu = $("<div></div>");
    divMenu.addClass("menu");
    divMenu.css("position","absolute")
            .css("top",e.clientY)
            .css("left",e.clientX);
    var ul = $("<ul></ul>");
    var li = $("<li></li>");
    li.html("Imprimir");
    ul.append(li);
    divMenu.append(ul);
    li.click(function(){
        window.print();
    });
    $(this).append(divMenu);    
});