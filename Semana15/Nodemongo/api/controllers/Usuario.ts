// usuario_controller
import { Request, Response } from 'express';

import { Usuario } from './../config/mongoose';


export let createUser = (req: Request, res: Response) => {

    // sin guardarlo en la base de datos
    let objUsuario = new Usuario(req.body.usuario);
    objUsuario.setSaltYHash(req.body.usuario.usu_pass);
    // save() => funcion que guarda el registro en la DB
    objUsuario.save((error) => {
        if (error) {
            let content = {
                message: "Error al crear el usuario",
                contenido: error
            };
            res.status(501).json(content);
        } else {
            let token = objUsuario.generarJWT();

            let content = {
                message: 'Usuario creado correctamente',
                contenido: {
                    objUsuario,
                    token
                }
            }
            res.status(201).json(content);
        }
    })
}