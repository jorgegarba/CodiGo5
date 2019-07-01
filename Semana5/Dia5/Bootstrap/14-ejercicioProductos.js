window.onload = function(){

    var main = document.getElementById("contenedor");
    var modalTitulo = document.getElementById("modalTitulo");    
    var modalImagen = document.getElementById("modalImagen");
    var modalDescripcion = document.getElementById("modalDescripcion");    

    var productos = [{
        id:10,
        nombre:"Samsung Galaxy S8",
        descripcion:"Hemos diseñado Galaxy S7 y S7 edge dando rienda suelta a nuestra imaginación. El resultado es una usabilidad incomparable, repleta de funciones avanzadas con un aspecto descaradamente moderno. Unos smartphones con un aspecto realmente atractivo y muy fáciles de usar.",
        imagen:"http://placehold.it/300x400/",
    },{
        id:20,
        nombre:"Samsung Galaxy S9",
        descripcion:"Hemos diseñado Galaxy S7 y S7 edge dando rienda suelta a nuestra imaginación. El resultado es una usabilidad incomparable, repleta de funciones avanzadas con un aspecto descaradamente moderno. Unos smartphones con un aspecto realmente atractivo y muy fáciles de usar.",
        imagen:"http://placehold.it/300x400/",
    },
    {
        id:30,
        nombre:"Samsung Galaxy S10",
        descripcion:"Hemos diseñado Galaxy S7 y S7 edge dando rienda suelta a nuestra imaginación. El resultado es una usabilidad incomparable, repleta de funciones avanzadas con un aspecto descaradamente moderno. Unos smartphones con un aspecto realmente atractivo y muy fáciles de usar.",
        imagen:"http://placehold.it/300x400/",
    },
    {
        id:40,
        nombre:"Samsung Galaxy S11",
        descripcion:"Hemos diseñado Galaxy S7 y S7 edge dando rienda suelta a nuestra imaginación. El resultado es una usabilidad incomparable, repleta de funciones avanzadas con un aspecto descaradamente moderno. Unos smartphones con un aspecto realmente atractivo y muy fáciles de usar.",
        imagen:"http://placehold.it/300x400/",
    }];

    function buscarProductById(idBuscado){
        for (let i = 0; i < productos.length; i++) {
            if(productos[i].id == idBuscado){
                return productos[i];
            }
        }
        return null;
    }


    var row = document.createElement("div");
    row.className = "row";
    main.appendChild(row);
    var divProducto = ""
    for(let i = 0; i < productos.length; i++){
         divProducto = divProducto +  `<div class="col-md-4 mb-2">
                                            <div class="card">
                                                <img src="${productos[i].imagen}" alt="" class="card-img-top">
                                                <div class="card-body">
                                                    <h4 class="card-title">${productos[i].nombre}</h4>
                                                    <p class="card-text">
                                                        ${productos[i].descripcion}
                                                    </p>
                                                    <button class="btn btn-primary clickable"
                                                            idproducto = "${productos[i].id}"
                                                            type="button">
                                                        Ver Producto
                                                    </button>
                                                </div>
                                            </div>
                                        </div>`; 

    }
    row.innerHTML = divProducto;

    var botones = document.querySelectorAll(".clickable");
    
    for (let i = 0; i < botones.length; i++) {
        // var temp = document.getElementById(`btnAbrir${i}`);
        // console.log(temp);
        botones[i].onclick = function(){
            // reiniciar los campos del modal
            modalTitulo.innerHTML = "------------------";
            modalDescripcion.innerHTML = "-----------------------";
            modalImagen.setAttribute("src","https://www.oei.es/historico/divulgacioncientifica/IMG/arton5169.jpg?1560240621");

            var idProducto = this.getAttribute("idProducto");
            var productoEncontrado = buscarProductById(idProducto);

            if(!productoEncontrado){
                location.reload();                
            }else{
                $("#miModal").modal("show");
                modalTitulo.innerHTML = productoEncontrado.nombre;
                modalDescripcion.innerHTML = productoEncontrado.descripcion;
                modalImagen.setAttribute("src",productoEncontrado.imagen);
            }

            
        };
    }
}



