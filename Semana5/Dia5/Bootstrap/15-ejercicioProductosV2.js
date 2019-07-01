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

    var row = document.createElement("div");
    row.className = "row";
    main.appendChild(row);
    
    for(let i = 0; i < productos.length; i++){

        var colmd4 = document.createElement("div");
        colmd4.className= "col-md-4 mb-2";

        var card = document.createElement("div");
        card.className= "card";
        
        colmd4.appendChild(card);

        var img = document.createElement("img");
        img.className = "card-img-top";
        img.setAttribute("src",`${productos[i].imagen}`);

        var body = document.createElement("div");
        body.className = "card-body";

        card.appendChild(img);
        card.appendChild(body);

        var h4 = document.createElement("h4");
        h4.className = "card-title";
        h4.innerHTML = `${productos[i].nombre}`;

        var p = document.createElement("p");
        p.className ="card-text";
        p.innerHTML =`${productos[i].descripcion}`;

        var boton = document.createElement("button");
        boton.className="btn btn-primary";
        boton.setAttribute("type","button");
        boton.innerHTML="Ver Producto";

        boton.onclick = function(){
                       
            $("#miModal").modal("show");
            modalTitulo.innerHTML = productos[i].nombre;
            modalDescripcion.innerHTML = productos[i].descripcion;
            modalImagen.setAttribute("src",productos[i].imagen);
            
        }

        body.appendChild(h4);
        body.appendChild(p);
        body.appendChild(boton);

        row.appendChild(colmd4);
                                               
    }

}



