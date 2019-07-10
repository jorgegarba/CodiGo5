//document ready se ejecutará cuando ya este listo el document
$(document).ready(function(){
    $("#listaProductos").DataTable({
        "ajax": {
            type:"GET",
            url:"http://5d258f57d924540014931687.mockapi.io/Productos",
            timeout:1500,
            //dataSrc hará que maneje toda la información a partir de un arreglo
            dataSrc:""
        },
        //columns tiene que tener asignado un arreglo con [{data:nombre_del_campo},...]
        "columns":[
            {data:"prod_id"},
            {data:"prod_nom"},
            {data:"prod_desc"},
            {data:"prod_price"},
            {data:"prod_pic",
            render:function(data){
                let imagen = '<img src="' + data + '" width="50px">';
                return imagen;
            }}
        ],
        "language":{
            "lengthMenu":"Mostrando _MENU_ items",
            "search": "Buscar: "
        }
    })
})