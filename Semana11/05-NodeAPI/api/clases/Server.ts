import express from 'express';
import {Request,Response,NextFunction} from 'express';
var colors = require('colors');
import {email_router} from './../rutas/Email';
var bodyParser = require('body-parser');

export class Server{

    public app:express.Application;
    public puerto:any;

    constructor(){
        this.app = express();
        this.app.use((req:Request,res:Response,next:NextFunction)=>{
            res.header('Access-Control-Allow-Origin','*');
            res.header('Access-Control-Allow-Methods','GET, POST');
            res.header('Allow','GET, POST');
            next();
        })
        this.puerto = process.env.PORT || 3000;
        this.configurarBodyParser();
        this.configurarRutas();
    }

    configurarBodyParser(){
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }

    configurarRutas(){
        this.app.use(email_router);
    }

    start(){
        this.app.listen(this.puerto,()=>{
            console.log(`Servidor inciado correctamente en el puerto ${this.puerto}`.blue);
            console.log(`visite: http://localhost:${this.puerto}`.red); 
        });
    }
}