import * as home from './api/controllers/home';
// importando express
var express = require('express');
// creando el servidor web en la varialbe app
var app = express();
// configurando una ruta y una acción a través del
// método GET (HTTP)
app.get('/',home.index);
app.post('/miruta',home.miruta);

// levantando o iniciando el servidor
app.listen(3000,()=>{
    console.log("Servidor corriendo correctamente en el puerto 3000");
})
