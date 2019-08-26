"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cursos_1 = require("../models/cursos");
const mongoose = require("mongoose");
const Curso = mongoose.model('Curso', cursos_1.CursoSchema);
class CursoController {
    anadirNuevoCurso(req, res) {
        let nuevoCurso = new Curso(req.body);
        nuevoCurso.save((err, curso) => {
            if (err) {
                res.send(err).status(500);
            }
            let content = {
                message: "Curso creado correctamente",
                contenido: curso
            };
            res.json(content).status(201);
        });
    }
    obtenerCursos(req, res) {
        Curso.find({}, (err, cursos) => {
            if (err) {
                res.send(err).status(500);
            }
            let content = {
                message: "Cursos Encontrados",
                contenido: cursos
            };
            res.json(content).status(200);
        });
    }
}
exports.CursoController = CursoController;
//https://mongoosejs.com/docs/api.html para revisar los metodos apra guardar actualizar, eliminar
