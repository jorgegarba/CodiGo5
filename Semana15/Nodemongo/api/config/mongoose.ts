import * as mongoose from 'mongoose';
import { cursoSchema } from './../models/Curso';
import { usuarioSchema } from './../models/Usuario';

export var Curso = mongoose.model('curso', cursoSchema);

interface iUsuario extends mongoose.Document {
    usu_nom: string;
    usu_ape: string;
    usu_email: string;
    usu_hash: string;
    usu_salt: string;
    setSaltYHash(usu_pass: string): Function;
    generarJWT(): Function;
}

export var Usuario = mongoose.model<iUsuario>('usuario', usuarioSchema);