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
        this.mongoDB = "mongodb://localhost/crm";
        this.app = express_1.default();
        this.puerto = process.env.PORT || 3000;
        //utilizo el body-parser antes de definir las rutas
        this.configBodyParser();
        this.misRutas.routes(this.app);
        this.configMongo();
        this.configurarCORS();
    }
    start() {
        this.app.listen(this.puerto, () => {
            console.log("servidor iniciado en el puerto : " + this.puerto);
        });
    }
    configMongo() {
        mongoose.connect(this.mongoDB);
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
