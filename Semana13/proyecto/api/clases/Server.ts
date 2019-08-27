import express,{Request,Response,NextFunction} from "express";

import {Rutas} from "../routes/rutas";
import mongoose = require("mongoose");

var bodyParser= require("body-parser");

export class Server{
    public app:express.Application;
    public puerto:any;
    public misRutas:Rutas = new Rutas();
    public mongoDB:string = "mongodb://localhost/crm";
    
    constructor(){
        this.app = express();
        this.puerto = process.env.PORT || 3000;
        //utilizo el body-parser antes de definir las rutas
        this.configBodyParser();
        this.misRutas.routes(this.app);
        this.configMongo();
        this.configurarCORS();
    }   
    start():void{
        this.app.listen(this.puerto,()=>{
            console.log("servidor iniciado en el puerto : " + this.puerto)
        })
    }
    configMongo():void{
        mongoose.connect(this.mongoDB);
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