import express,{Request,Response,NextFunction} from "express";

import {Rutas} from "../routes/rutas";
import mongoose = require("mongoose");

var bodyParser= require("body-parser");

export class Server{
    public app:express.Application;
    public puerto:any;
    public misRutas:Rutas = new Rutas();
    //En el caso de mongoDB Atlas, nos da un string de conexión, como el de la sgte linea
    //el mismo mongoDB Atlas con un wizard nos hará configurar nuestro usuario y contraseña
    //public mongoDB_atlas:string ="mongodb+srv://<usuario>:<password>@codigo-3lxvm.mongodb.net/test?retryWrites=true&w=majority";
    //en caso de no funcionar con el usuario de admin, probar en crear otro usuario
    public mongoDB_atlas:string ="mongodb+srv://<usuario>:<contrasena>@codigo-3lxvm.mongodb.net/test?retryWrites=true&w=majority";

    constructor(){
        this.app = express();
        this.puerto = process.env.PORT || 3000;
        //utilizo el body-parser antes de definir las rutas
        this.configBodyParser();
        this.misRutas.routes(this.app);
        this.configurarCORS();
        this.configMongo();
    }   
    start():void{
        this.app.listen(this.puerto,()=>{
            console.log("servidor iniciado en el puerto : " + this.puerto)
        })
    }
    configMongo():void{
        /*en el caso de atlas, nos va a pedir un poco mas de detalles,
             mongoose.connect puede recibir dos cosas la URI de conexión y Opciones, 
             las opciones estan documentadas en https://mongoosejs.com/docs/connections.html
        */
        mongoose.connect(this.mongoDB_atlas,
            {
                // intentos de reconexión
                reconnectTries: 30,
                // tiempo entre cada reconexión
                reconnectInterval: 2000
            }
        );
        //mongoose.connection.on nos permitira manejar errores de conexión despues de la primera conexión inicial
        mongoose.connection.on('error', err => {
            console.error(`MongoDB connection error: ${err}`);
            process.exit(1);
        });
        
    }
    
    configurarCORS():void{
        this.app.use((req:Request,res:Response,next:NextFunction) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Content-type, Authorization");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            next();
        })
    }

    configBodyParser():void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:false}));
    }
}