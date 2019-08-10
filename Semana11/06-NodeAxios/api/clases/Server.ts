import express from 'express';
import { Request, Response } from 'express';
import { email_router } from './../routes/Email';
import {lugar_router} from './../routes/Lugar';

var bodyParser = require('body-parser');

export class Server {
    public app: express.Application;
    public puerto: any;
    constructor() {
        this.app = express();
        this.puerto = process.env.PORT || 3000;
        this.configurarBodyParser();
        this.configurarRutas();
    }
    configurarBodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())
    }
    configurarRutas() {
        this.app.use(email_router);
        this.app.use(lugar_router);
    }
    start() {
        this.app.listen(this.puerto, () => {
            console.log(`Servidor inciado correctamente en el puerto ${this.puerto}`);
            console.log(`visite: http://localhost:${this.puerto}`);
        });
    }
}