// usuario_controller
import { Request, Response } from 'express';

import { Usuario } from './../config/sequelize';

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

export let createUser = (req: Request, res: Response) => {
    // // var str = "Hello World!";
    // // var enc = window.btoa(str);
    // // var dec = window.atob(enc);

    // // console.log(enc);
    // // console.log(dec);


    // let data = 'SGVsbG8gV29ybGQh=';
    // let buff = new Buffer(data, 'base64');
    // let text = buff.toString('ascii');
    // console.log(text);



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

export let iniciarSesion = (req: Request, res: Response) => {

    // usu_pass => llega encriptado an base64
    let { b_usu_email, b_usu_pass } = req.body;

    // desencriptando password
    let buff = new Buffer(b_usu_pass, 'base64');
    let pass_dec = buff.toString('ascii');

    Usuario.findOne({
        where: {
            usu_email: b_usu_email
        }
    }).then((objUsuario: any) => {
        if (objUsuario) {
            // cuando el usuario existe en la base de datos
            // debemos verificar si el password es correcto
            let valido = objUsuario.validPass(pass_dec);
            if (valido) {
                // PENDIENTE => Generar JWT
                res.status(200).json({ message: "LOGGIN CORRECTO" });
            } else {
                let rpta = {
                    message: "error",
                    contenido: "incorrecto"
                };
                res.status(500).json(rpta);
            }
        } else {
            // cuando el usuario no existe en la base de datos
            let rpta = {
                message: "error",
                contenido: "El usuario no existe"
            };
            res.status(500).json(rpta);
        }
    })

}