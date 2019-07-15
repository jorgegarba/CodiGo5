import {estiloMapa, centroPorDefecto} from './js/variables.js';

window.onload = () => {   

    let mapaGoogle = new google.maps.Map(document.getElementById('mapa'), {
        center: centroPorDefecto,
        zoom: 8,
        styles: estiloMapa
    });

    let posicionActual = () => {
        // solicitar permiso de acceso a ubicacion al navegador
        if(navigator.geolocation){
            // getCurrentPosition(posicion) => funcion que devuelve
            // información de la ubicación del equipo (coordenadas)
            navigator.geolocation.getCurrentPosition(posicion=>{
                // forma 1 => xvr
                let {latitude,longitude} = posicion.coords;
                var marcador = new google.maps.Marker(
                    {
                        position: {
                            lat:latitude,
                            lng:longitude
                        },
                        map: mapaGoogle,
                        title: "Aquí estoy"
                });
                mapaGoogle.setCenter({
                    lat:latitude,
                    lng:longitude
                });
                mapaGoogle.setZoom(16);
            },error=>{
                $.notify("No se han concedido permisos para acceder a tu ubicación","error");
                console.log(error);
            })
        }else{
            console.log("El navegador no posee geolocalización");
        }
    }

    posicionActual();
}