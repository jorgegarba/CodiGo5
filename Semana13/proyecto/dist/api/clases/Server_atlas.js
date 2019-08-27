"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rutas_1 = require("../routes/rutas");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
class Server {
    constructor() {
        this.misRutas = new rutas_1.Rutas();
        //En el caso de mongoDB Atlas, nos da un string de conexión, como el de la sgte linea
        //el mismo mongoDB Atlas con un wizard nos hará configurar nuestro usuario y contraseña
        //public mongoDB_atlas:string ="mongodb+srv://<usuario>:<password>@codigo-3lxvm.mongodb.net/test?retryWrites=true&w=majority";
        //en caso de no funcionar con el usuario de admin, probar en crear otro usuario
        this.mongoDB_atlas = "mongodb+srv://<usuario>:<contrasena>@codigo-3lxvm.mongodb.net/test?retryWrites=true&w=majority";
        this.app = express_1.default();
        this.puerto = process.env.PORT || 3000;
        //utilizo el body-parser antes de definir las rutas
        this.configBodyParser();
        this.misRutas.routes(this.app);
        this.configurarCORS();
        this.configMongo();
    }
    start() {
        this.app.listen(this.puerto, () => {
            console.log("servidor iniciado en el puerto : " + this.puerto);
        });
    }
    configMongo() {
        /*en el caso de atlas, nos va a pedir un poco mas de detalles,
             mongoose.connect puede recibir dos cosas la URI de conexión y Opciones,
             las opciones estan documentadas en https://mongoosejs.com/docs/connections.html
        */
        mongoose.connect(this.mongoDB_atlas, {
            // intentos de reconexión
            reconnectTries: 30,
            // tiempo entre cada reconexión
            reconnectInterval: 2000
        });
        //mongoose.connection.on nos permitira manejar errores de conexión despues de la primera conexión inicial
        mongoose.connection.on('error', err => {
            console.error(`MongoDB connection error: ${err}`);
            process.exit(1);
        });
    }
    configurarCORS() {
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Content-type, Authorization");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            next();
        });
    }
    configBodyParser() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.Server = Server;
