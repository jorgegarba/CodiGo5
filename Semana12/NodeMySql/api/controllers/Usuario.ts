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
            res.status(200).json(content);
        }
    })
}

export const getUsuariosByName = (req: Request, res: Response) => {
    let busqueda = req.body.busqueda;
    let consulta = `SELECT * FROM t_usuarios WHERE usu_nom like '%${busqueda}%'
    or usu_ape like '%${busqueda}%'`;
    connection.query(consulta, (error: any, results: any) => {
        if (error) {
            let content = {
                msg: 'ERROR',
                contenido: error,
            }
            res.status(501).json(content);
        } else {
            let content = {
                msg: 'OK',
                contenido: results,
            }
            res.status(201).json(content);
        }
    });


}

export const addUsuario = (req: Request, res: Response) => {
    let { usu_nom, usu_ape, usu_email, usu_salt, usu_hash } = req.body;
    let consulta = `INSERT INTO t_usuarios (usu_nom, usu_ape, usu_email, usu_salt, usu_hash) VALUES ('${usu_nom}','${usu_ape}','${usu_email}','${usu_salt}','${usu_hash}')`;
    connection.query(consulta, (error: any, results: any) => {
        if (error) {
            let content = {
                msg: 'ERROR',
                contenido: error,
            }
            res.status(501).json(content);
        } else {
            let content = {
                msg: 'CREADO',
                contenido: results,
            }
            res.status(201).json(content);
        }
    });
}