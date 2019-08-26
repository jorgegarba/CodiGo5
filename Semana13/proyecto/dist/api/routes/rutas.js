"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contactoController_1 = require("../controllers/contactoController");
const cursoController_1 = require("../controllers/cursoController");
class Rutas {
    constructor() {
        this.contactoControlador = new contactoController_1.ContactoController();
        this.cursoControlador = new cursoController_1.CursoController();
    }
    routes(app) {
        app.route("/").get((req, res) => {
            res.status(200).send({
                message: "Todo esta Ok petición GET exitosa :)"
            });
        });
        app.route("/contacto").get(this.contactoControlador.obtenerContactos)
            .post(this.contactoControlador.anadirNuevoContacto);
        app.route("/curso").get(this.cursoControlador.obtenerCursos)
            .post(this.cursoControlador.anadirNuevoCurso);
        app.route('/contacto/:id')
            .get(this.contactoControlador.obtenerContactoID);
    }
}
exports.Rutas = Rutas;
