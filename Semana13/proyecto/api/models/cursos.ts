import mongoose = require("mongoose");

const Schema = mongoose.Schema;

export const CursoSchema = new Schema({
    nombreCurso:{
        type:String
    },
    duracionCurso:{
        type:String
    },
    descripcionCurso:{
        type:String
    }
});

