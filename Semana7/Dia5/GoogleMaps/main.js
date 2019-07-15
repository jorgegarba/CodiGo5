import { estiloMapa, centroPorDefecto } from './js/variables.js';

window.onload = () => {

    let coordenadaAnterior;

    let mapaGoogle = new google.maps.Map(document.getElementById('mapa'), {
        center: centroPorDefecto,
        zoom: 8,
        styles: estiloMapa
    });

    let posicionActual = () => {
        // solicitar permiso de acceso a ubicacion al navegador
        if (navigator.geolocation) {
            // getCurrentPosition(posicion) => funcion que devuelve
            // información de la ubicación del equipo (coordenadas)
            navigator.geolocation.getCurrentPosition(posicion => {
                // forma 1 => xvr
                let { latitude, longitude } = posicion.coords;
                var marcador = new google.maps.Marker(
                    {
                        position: {
                            lat: latitude,
                            lng: longitude
                        },
                        map: mapaGoogle,
                        title: "Aquí estoy"
                    });
                // funcion para centrar el mapa de Google en una latitud y longitud
                // personalizada
                mapaGoogle.setCenter({
                    lat: latitude,
                    lng: longitude
                });
                // funcion para acercar o alejar la camara del visualizador del mapa
                mapaGoogle.setZoom(16);
            }, error => {
                $.notify("No se han concedido permisos para acceder a tu ubicación", "error");
                console.log(error);
            })
        } else {
            console.log("El navegador no posee geolocalización");
        }
    }

    let configurarListeners = () => {
        // asignando evento click a un mapa de google
        mapaGoogle.addListener('click', (e) => {
            
            $.notify("se hizo click en el mapa", "success");
            // imprimiendo las coordenadas de donde se 
            // ha efectuado el click en el mapa
            console.log(e.latLng.lat());
            console.log(e.latLng.lng());
            // colocando un marcador en el mapa

            let marcadorNuevo = new google.maps.Marker(
                {
                    position: {
                        lat: e.latLng.lat(),
                        lng: e.latLng.lng()
                    },
                    map: mapaGoogle,
                    icon: './icons/bus.png'
                });

            // Dibujando el polyline entre la coordenada anterior y el nuevo
            // punto
            // en el primer click, "coordenadaAnterior", será [undefined]
            // es por ello que deberá entrar a la zona de "else"
            // del segundo en adelante, "coordenadaAnterior" tendra un valor
            // definido y entrará a la zona de "if"
            // en ambos casos en necesario guardar el valor de la variable
            // coordenadaAnterior, 
            if (coordenadaAnterior) {
                console.log("ya existía una coord anterior");

                // uusare la logica con la coordenadAnterior
                // coordenadas guardará el valor de la nueva y la antigua coordenada
                var coordenadas = [
                    {
                        //  nueva
                        lat: e.latLng.lat(),
                        lng: e.latLng.lng()
                    },
                    {
                        // antigua
                        lat: coordenadaAnterior.lat,
                        lng: coordenadaAnterior.lng
                    },
                ];

                // creando el polyline o la linea blanca
                var lineaBlanca = new google.maps.Polyline({
                    path: coordenadas,
                    geodesic: true,
                    strokeColor: '#FFFFFF',
                    strokeOpacity: 1.0,
                    strokeWeight: 2
                });

                lineaBlanca.setMap(mapaGoogle);



                // GUARDAR LA NUEVA COORDENADA COMO ANTERIOR
                coordenadaAnterior = {
                    lat: e.latLng.lat(),
                    lng: e.latLng.lng(),
                }
            } else {
                console.log("Es el primer click");
                coordenadaAnterior = {
                    lat: e.latLng.lat(),
                    lng: e.latLng.lng(),
                }
            }
        })
    }

    posicionActual();
    configurarListeners();

}