"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.ContactoSchema = new Schema({
    primerNombre: {
        type: String
    },
    segundoNombre: {
        type: String
    },
    primerApellido: {
        type: String
    },
    segundoApellido: {
        type: String
    },
    telefono: {
        type: Number
    },
    dni: {
        type: String
    },
    //en el caso de requerir relaciones y hacer referencia a algun otro documento de alguna colección tienen populate
    //https://mongoosejs.com/docs/populate.html
    //despues de agregar tenemos que cambiar un poco el controlador
    curso: {
        type: Schema.Types.ObjectId,
        ref: 'cursos'
    }
});
