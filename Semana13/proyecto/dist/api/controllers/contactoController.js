"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contacto_1 = require("../models/contacto");
const mongoose = require("mongoose");
const cursos_1 = require("../models/cursos");
const Curso = mongoose.model("Curso", cursos_1.CursoSchema);
const Contacto = mongoose.model('Contacto', contacto_1.ContactoSchema);
class ContactoController {
    anadirNuevoContacto(req, res) {
        let nuevoContacto = new Contacto(req.body);
        nuevoContacto.save((err, contacto) => {
            if (err) {
                res.send(err).status(500);
            }
            let content = {
                message: "Contacto creado correctamente",
                contenido: contacto
            };
            res.json(content).status(201);
        });
    }
    obtenerContactos(req, res) {
        Contacto.find({}, (err, contactos) => {
            if (err) {
                res.send(err).status(500);
            }
            let content = {
                message: "Contactos Encontrados",
                contenido: contactos
            };
            res.json(content).status(200);
        });
    }
    //en este caso utiulizo .populate indicando el campo y el modelo
    //y exec para cuando mi operación haya tenido exito}
    obtenerContactoID(req, res) {
        Contacto.findById(req.params.id)
            .populate({ path: 'curso', model: Curso })
            .exec((err, contacto) => {
            if (err) {
                res.send(err);
            }
            let content = {
                message: "Contacto Encontrado",
                contenido: contacto
            };
            res.json(content).status(200);
        });
    }
}
exports.ContactoController = ContactoController;
