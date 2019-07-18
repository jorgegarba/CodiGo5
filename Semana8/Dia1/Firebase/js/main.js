import { firebaseConfig } from "./variables.js";
import { compararStrings } from './utils.js';
import { Plato } from './Plato.js';
// let script = document.createElement("script");
// script.setAttribute("src","https://www.gstatic.com/firebasejs/6.3.0/firebase-app.js");
// document.querySelector("body").prepend(script);

window.onload = () => {

    // Iniciando la configuración de firebase con nuestra aplicación
    firebase.initializeApp(firebaseConfig);

    if (location.href.indexOf("index") >= 0) {

        // Creando la referencia a Usuarios
        let refUsuarios = firebase.database().ref("usuarios");

        // estamos en index.html
        $.notify("estamos en index.html", "info");


        let abrirModalCrearCuenta = (e) => {
            e.preventDefault();
            $("#modalCrearCuenta").modal("show");
        }

        /**
         * Funcion para crear una cuenta en firebase
         */
        let crearCuenta = () => {
            let email = $("#inputEmailCrear").val().trim();
            let password = $("#inputPasswordCrear1").val().trim();

            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    $("#modalCrearCuenta").modal("hide");
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        /**
         * Funcion para cerrar sesion de Firebase
         * @param {*} e 
         */
        let cerrarSesion = (e) => {
            e.preventDefault();
            firebase.auth().signOut()
                .then(() => {
                    // redireccionar al index cuando la sesión se cierra
                    location = "./index.html";
                })
                .catch(() => {

                });
        }

        /**
         * Función para inciar sesión con Firebase
         */
        let iniciarSesion = () => {
            let email = $("#inputEmail").val().trim();
            let password = $("#inputPassword").val().trim();

            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    $("#modalIniciarSesion").modal("hide");
                })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                });
        }

        /**
         * Funcion para abrir el modal de inicio de Sesión
         * @param {*} e 
         */
        let abrirModalInicioSesion = (e) => {
            e.preventDefault();
            $("#modalIniciarSesion").modal("show");
        }

        /**
         * Funcion que verifica si un usuario estaba o no 
         * con la sesion iniciada.
         * Esta funcion se dispara automaticamente cada vez que el 
         * estado de la sesion cambia.
         */
        let verificarSesion = () => {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    console.log("Habia una sesion iniciada");
                    console.log(user);
                    $("#btnUsuario").html(user.email);

                    $("#btnRegistrar").hide();
                    $("#btnIniciarSesion").hide();
                    $("#btnCerrarSesion").show();

                    // VAMOS A VER SI EL USUARIO YA ESTABA REGISTRADO EN LA
                    // BASE DE DATOS EN TIEMPO REAL para crearlo o no crearlo

                    refUsuarios.on("value", dataSnapshot => {
                        // existe => variable booleana
                        // true si el nodo "usuarios" ya tenia ese child
                        // false si el nodo "usuarios" no tenia ese child
                        let existe = dataSnapshot.hasChild(user.uid);
                        if (!existe) {
                            // crear al usuario en la realtimeDatabase
                            refUsuarios.child(user.uid).set({
                                email: user.email
                            }).then(() => {
                                $.notify("Usuario REGISTRADO correctamente", "success");
                            })
                        }
                    });


                } else {
                    console.log("No habia una sesion iniciada o el usuario cerró sesion");
                    $("#btnUsuario").html("Iniciar Sesión");

                    $("#btnRegistrar").show();
                    $("#btnIniciarSesion").show();
                    $("#btnCerrarSesion").hide();
                }
            });
        }

        verificarSesion();

        // configurar boton para abrir modal
        $("#btnIniciarSesion").click(abrirModalInicioSesion);

        // configurar boton para iniciar sesion con firebase
        $("#btnIngresar").click(iniciarSesion);

        // configurar boton para cerrar sesion con firebase
        $("#btnCerrarSesion").click(cerrarSesion);

        // configurar boton para abrir modal de crear cuenta
        $("#btnRegistrar").click(abrirModalCrearCuenta);

        // configurar la validacion de contraseñas
        $("#inputPasswordCrear2").keyup(function (e) {
            let iguales = compararStrings($("#inputPasswordCrear1").val().trim(),
                $(this).val().trim());
            console.log(iguales);

            if (!iguales) {
                $("#helpPassword").html("Las Contraseñas no coinciden");
                $("#helpPassword").removeAttr("hidden");
                $("#helpPassword").attr("class", "form-text text-danger");

                $(this).attr("class", "form-control is-invalid");
                $("#btnCrearCuenta").attr("disabled", true);
            } else {
                $("#helpPassword").attr("hidden", true);
                $("#btnCrearCuenta").removeAttr("disabled");
                $(this).attr("class", "form-control is-valid");
            }
        });

        // configurar boton para crear o registrar una cuenta en firebase
        $("#btnCrearCuenta").click(crearCuenta);


    }
    if (location.href.indexOf("platos") >= 0) {

        // estamos en platos.html
        $.notify("estamos en platos.html", "info");

        // Creando una referencia inicial al nodo "platos"
        let refPlatos = firebase.database().ref("platos");

        // Creando una referencia inicial al STORAGE
        let refStorage = firebase.storage();

        // evento onchange para el slider
        let slider = document.getElementById("inputCalorias");
        slider.oninput = () => {
            $("#sliderCantidad").html(slider.value);
        }


        /**
         * Funcion que recibe los datos del objeto de tipo Plato 
         * Y setea los valores de los inputs del modal
         */
        let actualizarModal = ({ key, nombre, descripcion, origen, calorias }) => {
            $("#inputNombre").val(nombre);
            $("#inputDescripcion").val(descripcion);
            $("#inputOrigen").val(origen);
            $("#inputCalorias").val(calorias);
            $("#sliderCantidad").html(calorias);

            $("#btnGuardarPlato").html("Actualizar Plato");
            // off() desvincula todos los listeners que tenia el boton
            // previamente configurados
            $("#btnGuardarPlato").off();
            $("#btnGuardarPlato").click(() => {
                createPlato(key);
            });


        }

        /**
         * Funcion que sube una imagen al storage
         */
        let subirFoto = key => {
            // SUBIENDO UNA IMAGEN AL STORAGE LUEGO DE CREAR
            // EL REGISTRO EN DATABASE
            /**
             * 1. obtener el File o archivo del input para subir
             * archivos
             */
            let foto = document.getElementById("inputFoto").files[0];
            /**
             * 2. obtener la referencia al STORAGE
             * A continuación hacemos referencia a una carpeta
             * denominada "platos", si la carpeta no existe,
             * será creada automáticamente
             */
            let refStoragePlatos = refStorage.ref().child("platos");
            /**
             * 3. Obtener el nombre del archivo
             * EJM> mi_foto.jpg
             */
            let nombre = foto.name;
            /**
             * 4. Generar un nuevo nombre que no pueda repetirse
             * para el nombre del archivo a subir
             */
            let nombreFinal = key + "-" + nombre;
            /**
             * 5. Crear la metadata indicando el tipo de archivo
             * que se envia al servidor
             */
            let metadata = {
                contentType: foto.type
            };
            /**
             * 6. Subir el archivo a la referencia con el nuevo nombre
             * a través de la función "put()"
             */
            refStoragePlatos.child(nombreFinal)
                .put(foto, metadata)
                .then(respuesta => {
                    // repuesta => informacion de la subida
                    // del archivo
                    // ref.getDownloadURL() => funcion que devuelve una
                    // promesa con la URL del archivo subido
                    return respuesta.ref.getDownloadURL();
                })
                .then(url => {
                    console.log(url);
                    // COn la URL recibida, se debe actualizar el registro
                    // del plato en la base de datos para agregar el campo
                    // url.
                    /**
                     * 1. Crear la referencia al nodo a actualizar
                     */
                    let refPlatoCreado = refPlatos.child(key);
                    /**
                     * 2. Usar la funcion update() para enviar el nuevo campo
                     * con la URL de la imagen recientemente creada
                     */
                    return refPlatoCreado.update({ imagen: url });
                })
                .then(() => {
                    // El registro de la base de datos ha sido actualizado 
                    // con el campo de la imagen correctamente. =)
                    $.notify("Plato creado correctamente", "success");
                    $("#modalCrearPlato").modal("hide");
                    // reseteando el formulario luego de crear el registro
                    $("#formCrearPlato").trigger("reset");
                })
                .catch((error) => {
                    console.log(error);
                })
        }

        /**
         * Funcion para crear un registro en la DB de firebase
         */
        let createPlato = (key) => {
            if (key) {
                // actualizar
                /**
                 * Funcion que actualiza un registro en firebase
                 * @param {*} key el id del nodo a actualizar
                 */
                /**
                 * 1. Crear la referencia al nodo con la llave indicada
                 */
                let refKey = refPlatos.child(key);
                refKey.update({
                    nombre: $("#inputNombre").val().trim(),
                    descripcion: $("#inputDescripcion").val().trim(),
                    calorias: $("#inputCalorias").val(),
                    origen: $("#inputOrigen").val().trim(),
                }, () => {

                    $.notify("El registro fue atualizado correctamente", "success");

                })
            } else {
                // crear
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
                    nombre: $("#inputNombre").val().trim(),
                    calorias: $("#inputCalorias").val(),
                    origen: $("#inputOrigen").val(),
                    descripcion: $("#inputDescripcion").val()
                }).then(() => {

                    subirFoto(key);

                }).catch(error => {
                    $.notify("Error al crear el plato", "danger");
                    console.log(error);
                });
            }
        }
        /**
         * Funcion para eliminar un registro de la DB de firebase
         */
        let deletePlato = (key) => {
            /**
             * 1. Crear la referencia al nodo a eliminar
             */
            let refKey = refPlatos.child(key);
            // let refKey = firebase.database().ref("platos").child(key);
            // let refKey = firebase.database().ref(`platos/${key}`);
            refKey.remove()
                .then(() => {
                    $.notify("El elemento, se ha eliminado correctamente", "success")
                })
                .catch(error => {
                    $.notify("Ups! ocurrió un error", "danger");
                    console.log(error);
                });
        }

        let renderizarPlatosV2 = dataSnapshot => {
            $("main").html("");
            let platos = [];

            let ul = $(`<ul id="pagination-demo" class="pagination-lg pull-right"></ul>`);

            dataSnapshot.forEach(plato => {
                let objPlato = new Plato(plato.key,
                    plato.val().nombre,
                    plato.val().descripcion,
                    plato.val().origen,
                    plato.val().calorias,
                    plato.val().imagen);
                platos.push(objPlato);
            });

            let paginas = Math.ceil(platos.length / 3);
            let elementosEnUltimaPagina = platos.length % 3;

            console.log(paginas);
            for (let i = 0; i < paginas; i++) {
                let page = $(`<div class="page"></div>`);
                page.attr("id", `page${i + 1}`);
                if (i === paginas - 1) {
                    let cardColumns = $(`<div class="card-columns"></div>`);
                    for (let j = i * 3; j < (i * 3) + elementosEnUltimaPagina; j++) {

                        let card = $(`<div class="card"></div`);
                        let cardHeader = $(`<div class="card-header text-right"></div>`);
                        let botonEliminar = $(`<button class="btn btn-danger" data-toggle="tooltip" data-placement="top" title="Eliminarsh">
                                            <i class="fa fa-trash"></i>
                                       </button>`);
                        botonEliminar.tooltip({});

                        let botonEditar = $(`<button class="btn btn-warning" data-toggle="tooltip" data-placement="top" title="Editarsh"><i class="fa fa-pen"></i></button>`);

                        let cardBody = $(`<div class="card-body"></div>`);
                        let cardTitle = $(`<h5 class="card-title"></h5>`);
                        let parrafo = $(`<p class="card-text"></p>`);

                        let img = $(`<img src="${platos[j].imagen}" class="card-img-bottom"></img>`);

                        parrafo.html(platos[j].descripcion);
                        cardTitle.html(platos[j].nombre);

                        cardHeader.append(botonEliminar);
                        cardHeader.append(botonEditar);
                        card.append(cardHeader);

                        cardBody.append(cardTitle);
                        cardBody.append(parrafo);

                        card.append(cardBody);

                        card.append(img)

                        cardColumns.append(card);

                        botonEliminar.click((e) => {
                            deletePlato(platos[j].key);
                        });

                        botonEditar.click((e) => {
                            $("#modalCrearPlato").modal('show');
                            actualizarModal(objPlato);
                        });
                    }
                    page.append(cardColumns);
                } else {
                    let cardColumns = $(`<div class="card-columns"></div>`);
                    for (let j = i * 3; j < (i * 3) + 3; j++) {

                        let card = $(`<div class="card"></div`);
                        let cardHeader = $(`<div class="card-header text-right"></div>`);
                        let botonEliminar = $(`<button class="btn btn-danger" data-toggle="tooltip" data-placement="top" title="Eliminarsh">
                                            <i class="fa fa-trash"></i>
                                       </button>`);
                        botonEliminar.tooltip({});

                        let botonEditar = $(`<button class="btn btn-warning" data-toggle="tooltip" data-placement="top" title="Editarsh"><i class="fa fa-pen"></i></button>`);

                        let cardBody = $(`<div class="card-body"></div>`);
                        let cardTitle = $(`<h5 class="card-title"></h5>`);
                        let parrafo = $(`<p class="card-text"></p>`);

                        let img = $(`<img src="${platos[j].imagen}" class="card-img-bottom"></img>`);

                        parrafo.html(platos[j].descripcion);
                        cardTitle.html(platos[j].nombre);

                        cardHeader.append(botonEliminar);
                        cardHeader.append(botonEditar);
                        card.append(cardHeader);

                        cardBody.append(cardTitle);
                        cardBody.append(parrafo);

                        card.append(cardBody);

                        card.append(img)

                        cardColumns.append(card);

                        botonEliminar.click((e) => {
                            deletePlato(platos[j].key);
                        });

                        botonEditar.click((e) => {
                            $("#modalCrearPlato").modal('show');
                            actualizarModal(objPlato);
                        });
                    }
                    page.append(cardColumns);
                }
                $("main").append(page);
                $("main").append(ul);
            }

            $('#pagination-demo').twbsPagination({
                totalPages: 2,
                // the current page that show on start
                startPage: 1,

                // maximum visible pages
                visiblePages: 2,

                initiateStartPageClick: true,

                // template for pagination links
                href: false,

                // variable name in href template for page number
                hrefVariable: '{{number}}',

                // Text labels
                first: 'First',
                prev: 'Previous',
                next: 'Next',
                last: 'Last',

                // carousel-style pagination
                loop: false,

                // callback function
                onPageClick: function (event, page) {
                    $('.page-active').removeClass('page-active');
                    $('#page' + page).addClass('page-active');
                },

                // pagination Classes
                paginationClass: 'pagination',
                nextClass: 'next',
                prevClass: 'prev',
                lastClass: 'last',
                firstClass: 'first',
                pageClass: 'page',
                activeClass: 'active',
                disabledClass: 'disabled'

            });
            console.log("fin");
            

        }

        /**
         * Funcion que recibe un snapshot de el nodo platos 
         * de Firebase para dibujarlos en el DOM en forma de Cards
         * @param {*} dataSnapshot 
         */
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

                let botonEditar = $(`<button class="btn btn-warning" data-toggle="tooltip" data-placement="top" title="Editarsh">
                                        <i class="fa fa-pen"></i>
                                    </button>`);

                let cardBody = $(`<div class="card-body"></div>`);
                let cardTitle = $(`<h5 class="card-title"></h5>`);
                let parrafo = $(`<p class="card-text"></p>`);

                let img = $(`<img src="${plato.val().imagen}" class="card-img-bottom"></img>`);

                parrafo.html(plato.val().descripcion);
                cardTitle.html(plato.val().nombre);

                cardHeader.append(botonEliminar);
                cardHeader.append(botonEditar);
                card.append(cardHeader);

                cardBody.append(cardTitle);
                cardBody.append(parrafo);

                card.append(cardBody);

                card.append(img)

                cardColumns.append(card);

                botonEliminar.click((e) => {
                    deletePlato(plato.key);
                });

                botonEditar.click((e) => {
                    $("#modalCrearPlato").modal('show');
                    let objPlato = {
                        key: plato.key,
                        nombre: plato.val().nombre,
                        descripcion: plato.val().descripcion,
                        calorias: plato.val().calorias,
                        origen: plato.val().origen,
                    };
                    actualizarModal(objPlato);
                });

            });

            $("main").append(cardColumns);
        }
        /**
         * Funcion que trae todos los platos de la base de datos de Firebase
         */
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
                // renderizarPlatos(dataSnapshot);
                renderizarPlatosV2(dataSnapshot);
            });

        }

        // configurando click al boton de agregar plato
        // para aparecer modal
        $("#btnCrearPlato").click(() => {
            // desvincular todos los listeners anteriores
            $("#btnGuardarPlato").off();
            $("#btnGuardarPlato").html("Crear Plato");
            $("#btnGuardarPlato").click(() => {
                createPlato();
            });

            $("#formCrearPlato").trigger("reset");
            $("#modalCrearPlato").modal("show");

        });

        // asignando evento click al boton para crear un registro en firebase
        $("#btnGuardarPlato").click(() => {
            createPlato();
        });

        getPlatos();

    }

}










