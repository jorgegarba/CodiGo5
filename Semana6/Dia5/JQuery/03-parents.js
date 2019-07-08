console.log($(".item-2"));
//  find([elemento]) => Buscar todos los elementos 
// descendientes a partir de el nodo indicado

// colocar estilo al primer li es decir la posicion 0
// de los hijos del elemento que tenga la clase "item-2"
$(".item-2").find("li:eq(0)").css("border","1px solid #bbbbbb");

$(".item-a").parent()
            .parent()
            .parent()
            .css("list-style","none");

$(".nivel-1>li").addClass("vinietas");
