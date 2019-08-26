import {Request,Response} from "express";
import {ContactoController} from "../controllers/contactoController";
import {CursoController} from "../controllers/cursoController";
export class Rutas{

    public contactoControlador:ContactoController = new ContactoController();
    public cursoControlador:CursoController = new CursoController();

    public routes(app:any):void{
        app.route("/").get((req:Request,res:Response) =>{
            res.status(200).send({
                message:"Todo esta Ok petición GET exitosa :)"
            });
        });

        app.route("/contacto").get(this.contactoControlador.obtenerContactos)
        .post(this.contactoControlador.anadirNuevoContacto)

        app.route("/curso").get(this.cursoControlador.obtenerCursos)
        .post(this.cursoControlador.anadirNuevoCurso)
        
        app.route('/contacto/:id')
        .get(this.contactoControlador.obtenerContactoID)
    }
}