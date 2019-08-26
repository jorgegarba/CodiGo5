import {ContactoSchema} from "../models/contacto";
import {Request,Response} from "express";
import mongoose = require("mongoose");
import {CursoSchema} from "../models/cursos";

const Curso = mongoose.model("Curso",CursoSchema);
const Contacto = mongoose.model('Contacto',ContactoSchema);

export class ContactoController{

    public anadirNuevoContacto(req: Request, res:Response){
        
        let nuevoContacto = new Contacto(req.body);

        nuevoContacto.save((err,contacto) =>{
            if(err){
                res.send(err).status(500);
            }
            let content = {
                message:"Contacto creado correctamente",
                contenido:contacto
            }
            res.json(content).status(201);
        });

    }

    public obtenerContactos(req:Request, res:Response){
        
        Contacto.find({},(err,contactos) =>{
            
            if(err){
                res.send(err).status(500);
            }
            let content = {
                message:"Contactos Encontrados",
                contenido:contactos
            }
            res.json(content).status(200);
        })
    }
    //en este caso utiulizo .populate indicando el campo y el modelo
    //y exec para cuando mi operación haya tenido exito}
    public obtenerContactoID (req: Request, res: Response) {           
        Contacto.findById(req.params.id)
        .populate({path:'curso',model:Curso})
        .exec((err, contacto) => {
            if(err){
                res.send(err);
            }
            let content = {
                message:"Contacto Encontrado",
                contenido:contacto
            }
            res.json(content).status(200);
        });
    }

}
