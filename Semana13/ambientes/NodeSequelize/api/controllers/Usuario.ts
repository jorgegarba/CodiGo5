// usuario_controller
import { Request, Response } from 'express';

import { Usuario } from './../config/sequelize';

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

export let createUser = (req: Request, res: Response) => {

    // build() => Construye una instancia de la clase Usuario
    // sin guardarlo en la base de datos
    let objUsuario = Usuario.build(req.body.usuario);

    objUsuario.setSaltYHash(req.body.usuario.usu_pass);

    // save() => promesa que guarda el registro en la DB
    objUsuario.save().then((usuarioCreado: any) => {

        Usuario.findByPk(usuarioCreado.usu_id).then((usuarioEncontrado: any) => {

            let content = {
                message: 'Usuario creado correctamente',
                contenido: usuarioEncontrado
            }
            res.status(201).json(content);
        })

    }).catch((error: any) => {
        let content = {
            message: "Error al crear el usuario",
            contenido: error
        };
        res.status(501).json(content);
    });

}

export let findUserByNomOApe = (req: Request, res: Response) => {

    let busqueda = req.body.busqueda;
    Usuario.findAll({
        where: {
            [Op.or]: [{
                usu_nom: {
                    [Op.substring]: busqueda
                },
            }, {
                usu_ape: {
                    [Op.substring]: busqueda
                },
            }]
        }
    }).then((rpta: any) => {
        res.json(rpta);
    })
}