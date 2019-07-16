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
        // estamos en platos.html
        $.notify("estamos en platos.html", "info");
        // Inicializar la base de datos en tiempo real
        // creando una referencia al nodo principal
        // database() => funcion disponible con el script de database firebase
        let refPlatos = firebase.database().ref("platos");
        refPlatos.on("value", dataSnapshot => {
            // FORMA 1 PARA CONSUMIR LOS DATOS de dataSnapshot
            // let data = dataSnapshot.val();
            // for (const clave in data) {
            //     console.log(clave);
            //     console.log(data[clave].calorias);
            //     console.log(data[clave].origen);
            // }
            // FORMA 2 PARA CONSUMIR LOS DATOS de dataSnapshot
            dataSnapshot.forEach(plato => {
                console.log(plato.key);
                console.log(plato.val().calorias);
                console.log(plato.val().origen);
            });
            
        })
    }
}










