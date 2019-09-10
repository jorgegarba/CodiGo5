import express, { Request, Response, NextFunction } from 'express';

import * as ApiPlantilla from "./../docs/swagger_template.json";
import * as ApiDocumentacion from "./../docs/swagger_doc.json";

import { curso_router } from './../routes/Curso';

var mongoose = require('mongoose');

const swaggerUi = require('swagger-ui-express');
var bodyParser = require('body-parser');

export class Server {
    public app: express.Application;
    public puerto: any;

    constructor() {
        this.app = express();

        this.puerto = process.env.PORT || 5000;
        this.configurarBodyParser();
        this.habilitarCORS();
        this.configurarRutas();
    }

    habilitarCORS() {
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            // configurar CORS
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Content-type, Authorization");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            next();
        })
    }
    configurarRutas() {
        this.app.get('/', (req: Request, res: Response) => {
            res.status(200).send("Servidor OK!");
        });

        this.app.use(curso_router);

        this.app.use('/rutasplantilla', swaggerUi.serve, swaggerUi.setup(ApiPlantilla));
        this.app.use('/rutas', swaggerUi.serve, swaggerUi.setup(ApiDocumentacion));

    }
    start() {
        this.app.listen(this.puerto, () => {
            console.log("Servidor Iniciado correctamente en el puerto " + this.puerto);
            mongoose.connect('mongodb://localhost/codigo', { useNewUrlParser: true })
                .then(() => {
                    console.log("Conectado a la base de datos en Mongo correctamente =)");
                })
        })
    }
    configurarBodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())
    }
}