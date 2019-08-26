"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.CursoSchema = new Schema({
    nombreCurso: {
        type: String
    },
    duracionCurso: {
        type: String
    },
    descripcionCurso: {
        type: String
    }
});
