import { firebaseConfig } from "./variables.js";

// let script = document.createElement("script");
// script.setAttribute("src","https://www.gstatic.com/firebasejs/6.3.0/firebase-app.js");
// document.querySelector("body").prepend(script);

window.onload = () => {

    


    // Iniciando la configuración de firebase con nuestra aplicación
    firebase.initializeApp(firebaseConfig);

    if (location.href.indexOf("index") >= 0) {
        // estamos en index.html
        $.notify("estamos en index.html", "info");

    }
    if (location.href.indexOf("platos") >= 0) {
        $('input[type="range"]').rangeslider({

            // Feature detection the default is `true`.
            // Set this to `false` if you want to use
            // the polyfill also in Browsers which support
            // the native <input type="range"> element.
            polyfill: true,
        
            // Default CSS classes
            rangeClass: 'rangeslider',
            disabledClass: 'rangeslider--disabled',
            horizontalClass: 'rangeslider--horizontal',
            verticalClass: 'rangeslider--vertical',
            fillClass: 'rangeslider__fill',
            handleClass: 'rangeslider__handle',
        
            // Callback function
            onInit: function() {},
        
            // Callback function
            onSlide: function(position, value) {},
        
            // Callback function
            onSlideEnd: function(position, value) {}
        });
        // Creando una referencia inicial al nodo "platos"
        let refPlatos = firebase.database().ref("platos");
        /**
         * Funcion para crear un registro en la DB de firebase
         */
        let createPlato = ()=>{

            /**
             * 1. obtener una nueva clave o primary para el 
             * registro que se va a insertar
             */
             let key = refPlatos.push().key;
             /**
              * 2. Referenciar al nodo que lleva por nombre
              * la clave generada en el paso 1
              */
             let referenciaKey = refPlatos.child(key);
             /**
              * 3. Asignar atributos al nodo referenciado en 
              * el paso [2] a partir del metodo "set()"
              */
             referenciaKey.set({
                 nombre:$("#inputNombre").val().trim(),
                 calorias: $("#inputCalorias").val(),
                 origen: $("#inputOrigen").val(),
                 descripcion: $("#inputDescripcion").val()
             }).then(()=>{
                $.notify("Plato creado correctamente","success");
                $("#modalCrearPlato").modal("hide");
             }).catch( error =>{
                $.notify("Error al crear el plato","danger");
                console.log(error);
             });

        }

        let deletePlato = (key)=>{
            console.log(key);
        }

        // configurando click al boton de agregar plato
        // para aparecer modal
        $("#btnCrearPlato").click(()=>{
            $("#modalCrearPlato").modal("show")
        });

        // asignando evento click al boton para crear un registro en firebase
        $("#btnGuardarPlato").click(createPlato);

        // estamos en platos.html
        $.notify("estamos en platos.html", "info");

        let renderizarPlatos = (dataSnapshot) => {
            /**
             * 1. limpiar el conteneder de cards (main)
             */
            $("main").html("");
            /**
             * 2. crear una variable string que guardara
             * la estructura del contenido de main (cards)
             */
            
            let cardColumns = $(`<div class="card-columns"></div>`);

            dataSnapshot.forEach(plato => {
                let card = $(`<div class="card"></div`);
                let cardHeader = $(`<div class="card-header text-right"></div>`);
                let botonEliminar = $(`<button class="btn btn-danger" data-toggle="tooltip" data-placement="top" title="Eliminarsh">
                                            <i class="fa fa-trash"></i>
                                       </button>`);
                botonEliminar.tooltip({});

                let cardBody = $(`<div class="card-body"></div>`);
                let cardTitle = $(`<h5 class="card-title"></h5>`);
                let parrafo = $(`<p class="card-text"></p>`);

                parrafo.html(plato.val().descripcion);
                cardTitle.html(plato.val().nombre);

                cardHeader.append(botonEliminar);
                card.append(cardHeader);
                
                cardBody.append(cardTitle);
                cardBody.append(parrafo);

                card.append(cardBody);

                cardColumns.append(card);
                
                botonEliminar.click((e)=>{
                    deletePlato(plato.key)
                });

            });

            $("main").append(cardColumns);
        }

        let getPlatos = () => {
            $("main").html(`<div class="text-center">
                                <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                                </div>
                            </div>`);
            // Inicializar la base de datos en tiempo real
            // creando una referencia al nodo principal
            // database() => funcion disponible con el script de database firebase
            refPlatos.on("value", dataSnapshot => {
                // FORMA 1 PARA CONSUMIR LOS DATOS de dataSnapshot
                // let data = dataSnapshot.val();
                // for (const clave in data) {
                //     console.log(clave);
                //     console.log(data[clave].calorias);
                //     console.log(data[clave].origen);
                // }
                // FORMA 2 PARA CONSUMIR LOS DATOS de dataSnapshot
                // dataSnapshot.forEach(plato => {
                //     console.log(plato.key);
                //     console.log(plato.val().calorias);
                //     console.log(plato.val().origen);
                // });
                renderizarPlatos(dataSnapshot);
            });

        }

        getPlatos();

    }
}










