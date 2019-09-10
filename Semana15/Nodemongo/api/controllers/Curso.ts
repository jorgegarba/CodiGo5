import { Request, Response } from 'express';
import { Curso } from './../config/mongoose';

export const curso_controller = {
    getCursos: (req: Request, res: Response) => {
        Curso.find({}, (err, cursos) => {
            if (err) {
                res.status(500).json({
                    message: 'error',
                    contenido: err
                })
                return;
            }
            res.status(200).json({
                message: 'ok',
                contenido: cursos
            });
        })
    },
    createCurso: (req: Request, res: Response) => { 
        
    }
}