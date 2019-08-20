import express, { Request, Response, NextFunction } from 'express';
import { sequelize } from './../config/sequelize';
import { usuario_router } from './../routes/Usuario';

var bodyParser = require('body-parser');

export class Server {
    public app: express.Application;
    public puerto: any;

    constructor() {
        this.app = express();

        this.puerto = process.env.PORT || 3000;
        this.configurarBodyParser();
        this.configurarRutas();
        this.habilitarCORS();
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
        this.app.use(usuario_router);
    }
    start() {
        this.app.listen(this.puerto, () => {
            console.log("Servidor Iniciado correctamente en el puerto " + this.puerto);
            // sync => sirve para crear las tablas en la BD a partir de los
            // modelos.
            sequelize.sync({ force: false }).then(() => {
                console.log("BD creada con éxito");
            }).catch((error: any) => {
                console.log("error al crear la BD");
                console.log(error);
            })
        })
    }
    configurarBodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())
    }
}