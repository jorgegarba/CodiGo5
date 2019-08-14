import express, { Request, Response, NextFunction } from 'express';
import http from 'http';
import socketIO from 'socket.io';
import { Clientes } from './Clientes';
import { Cliente } from './Cliente';

var bodyParser = require('body-parser');

export class Server {
    public app: express.Application;
    public puerto: any;
    public clientes: Clientes = new Clientes();
    public httpServer: http.Server;
    public io: socketIO.Server;

    constructor() {
        this.app = express();
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);

        this.puerto = process.env.PORT || 3000;
        this.configurarBodyParser();
        this.configurarRutas();
        this.habilitarCORS();
        this.escucharSockets();
    }

    escucharSockets() {
        console.log("Escuchando sockets");
        this.io.on("connect", cliente => {

            let objCliente = new Cliente(cliente.id);
            this.clientes.add(objCliente);
            console.log("Nueva Lista de clientes");
            console.log(this.clientes.getclientes());

            cliente.on('disconnect', () => {
                this.clientes.remove(cliente.id)
                console.log("Nueva Lista de clientes");
                console.log(this.clientes.getclientes());
                // enviar la nueva lista de clientes
                this.io.emit("lista-usuarios", this.clientes.getclientes());
            })

            cliente.on('pedir-usuarios', () => {
                console.log(`el cliente ${cliente.id} esta pidiendo usuarios`);
                this.io.emit("lista-usuarios", this.clientes.getclientes());
            });


            cliente.on('configurar-usuario', (nombre) => {
                let objCliente = new Cliente(cliente.id);
                objCliente.nombre = nombre;
                this.clientes.update(objCliente);
                this.io.emit("lista-usuarios", this.clientes.getclientes());
            })

            cliente.on('enviar-mensaje', (mensaje) => {
                let nombre = this.clientes.getClienteById(cliente.id);

                let contenido = {
                    de: nombre,
                    mensaje: mensaje
                }

                this.io.emit('nuevo-mensaje', contenido);
            })

        })
    }

    habilitarCORS() {
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            // configurar CORS
            res.header("Access-Control-Allow-Origin", "http://localhost:4200");
            res.header("Access-Control-Allow-Headers", "Content-type, Authorization");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            next();
        })
    }
    configurarRutas() {
        this.app.get('/', (req: Request, res: Response) => {
            res.status(200).send("Servidor OK!");
        });
    }
    start() {
        this.httpServer.listen(this.puerto, () => {
            console.log("Servidor Iniciado correctamente en el puerto " + this.puerto);
        })
    }
    configurarBodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())
    }
}