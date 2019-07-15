import {firebaseConfig} from "./variables.js";

// let script = document.createElement("script");
// script.setAttribute("src","https://www.gstatic.com/firebasejs/6.3.0/firebase-app.js");
// document.querySelector("body").prepend(script);

window.onload = ()=>{

    

    // Iniciando la base de datos de firebase
    firebase.initializeApp(firebaseConfig);


    if(location.href.indexOf("index")>=0){
        // estamos en index.html
        $.notify("estamos en index.html","info");

    }
    if(location.href.indexOf("platos")>=0){
        // estamos en platos.html
        $.notify("estamos en platos.html","info");

    }
}