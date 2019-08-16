// ususario controller
import { Request, Response } from 'express';
import { connection } from './../config/MySql';
export const getUsuarios = (req: Request, res: Response) => {

    connection.query('SELECT * FROM t_usuarios', function (error: any, results: any, fields: any) {
        if (error) {
            let content = {
                msg: "error",
                contenido: error
            }
            res.status(501).json(content);
        } else {
            let content = {
                msg: "ok",
                contenido: results
            }
            res.status(201).json(content);
        }
    })
}