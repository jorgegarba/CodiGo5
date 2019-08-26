import {CursoSchema} from "../models/cursos";
import {Request,Response} from "express";
import mongoose = require("mongoose");


const Curso = mongoose.model('Curso',CursoSchema);


export class CursoController{

    public anadirNuevoCurso(req: Request, res:Response){
        let nuevoCurso = new Curso(req.body);

        nuevoCurso.save((err,curso) =>{
            if(err){
                res.send(err).status(500);
            }
            let content = {
                message:"Curso creado correctamente",
                contenido:curso
            }
            res.json(content).status(201);
        });

    }

    public obtenerCursos(req:Request, res:Response){
        Curso.find({},(err,cursos) =>{
            if(err){
                res.send(err).status(500);
            }
            let content = {
                message:"Cursos Encontrados",
                contenido:cursos
            }
            res.json(content).status(200);
        })
    }

}
//https://mongoosejs.com/docs/api.html para revisar los metodos apra guardar actualizar, eliminar