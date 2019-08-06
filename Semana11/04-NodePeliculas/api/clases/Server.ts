import express from 'express';
import {pelicula_router} from './../rutas/Pelicula';

export class Server{
    app:express.Application;
    
    constructor(){
        this.app = express();
        this.vincularRutas();
    }

    vincularRutas(){
        this.app.use('/api',pelicula_router);
    }

    start(){
        this.app.listen(3000,()=>{
            console.log(`El servidor se ha iniciado correctamente`);
        });
    }
}