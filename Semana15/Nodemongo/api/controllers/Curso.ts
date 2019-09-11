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
        Curso.create(req.body, (err: any, rpta: any) => {
            if (err) {
                res.status(500).json({
                    message: 'error',
                    contenido: err
                });
                return;
            }
            res.status(201).json({
                message: 'ok',
                contenido: rpta
            });
        })
    },
    addVideoByCursoId: (req: Request, res: Response) => {
        let { curso_id } = req.params;
        let { vid_titulo, vid_url } = req.body;
        Curso.findById(curso_id, (err, docCurso: any) => {
            docCurso.cur_videos.push({
                vid_titulo: vid_titulo,
                vid_url: vid_url
            });
            docCurso.save((err: any, rpta: any) => {
                if (err) {
                    res.status(500).json({
                        message: 'error',
                        contenido: err
                    });
                    return;
                }
                res.status(200).json({
                    message: 'ok',
                    contenido: rpta
                });
            })
        })
    }
}