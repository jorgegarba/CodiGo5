window.onload = () => {

    let traerGata = () => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: "http://5d1cd485f31e7f00147ebb7a.mockapi.io/aulassssssss",
                timeout: 1500,
                data: null,
                success: function (respuesta) {
                    resolve(respuesta);
                },
                error: function (error) {
                    reject(error);
                },
                beforeSend: function () {
                    console.log("Antes de enviar la data");
                }
            })
        })
    }

    let promesa = traerGata();
    // la promesa tiene un estado de "pending" cuando 
    //  no se ha invocado sus metodos "resolve" ni "reject"
    console.log(promesa);

    promesa.then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log("Ups!, hubo un error");
        console.error(error.responseText);
    });

}