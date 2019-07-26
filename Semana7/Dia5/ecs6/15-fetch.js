window.onload = () => {

    let btnGetData = document.getElementById("btnGetData");
    let btnPostData = document.getElementById("btnPostData");
    btnGetData.onclick = () => {
        // EJEMPLO CON EL VERBO GET
        fetch("https://canchitas-b1d33.firebaseio.com/canchitas.json")
            .then(rpta => {
                return rpta.json();
            })
            .then(myJson => {
                console.log(myJson);
            });
    }
    btnPostData.onclick = () => {
        // EJEMPLO USANDO EL VERBO POST
        let configuracion = {
            method: 'POST',
            // body =>  datos a enviar al servidor
            body: JSON.stringify({nombre: "Canchita Pegazo",direccion: "Calle Santa Catalina 565"
            }),
            headers: {'Content-Type': 'application/json'}
        }
        fetch("https://canchitas-b1d33.firebaseio.com/canchitas.json", configuracion)
            .then(rpta => {
                return rpta.json();
            })
            .then(myJson => {
                console.log(myJson);
            });
    }


}