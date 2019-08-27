import { Response, Request } from "express";
import { Pabellon, TipoAula } from "./../config/sequelize";
import { Aula } from "./../config/sequelize";
// pabellon controller

export let createPabellon = (req: Request, res: Response) => {

    let objPabellon = Pabellon.build(req.body);
    objPabellon.save().then((pabellonCreado: any) => {
        let rpta = {
            message: "Creado Correctamente",
            contenido: pabellonCreado,
        }
        res.status(201).json(rpta);
    }).catch((error: any) => {
        let rpta = {
            message: "Error al crear",
            contenido: error,
        }
        res.status(501).json(rpta);
    });

}

export let updatePabellon = (req: Request, res: Response) => {
    Pabellon.update(
        {
            pab_desc: req.body.pabellon.pab_desc
        },
        {
            where: {
                pab_id: req.body.pabellon.pab_id
            }
        }).then((actualiado: any) => {
            let rpta = {
                message: "Actualizado Correctamente",
                contenido: actualiado
            }
            res.status(200).json(rpta);
        }).catch((error: any) => {
            let rpta = {
                message: "Error al actualizar",
                contenido: error
            }
            res.status(501).json(rpta);
        })
}

export let getAulasXPabellones = (req: Request, res: Response) => {

    Pabellon.findAll({
        include: [{
            model: Aula
        }]
    }).then((resultado: any) => {
        let rpta = {
            message: "ok",
            contenido: resultado
        }
        res.status(200).json(rpta);
    })

}

export let getAulasByPabellonId = (req: Request, res: Response) => {

    Pabellon.findAll({
        where: {
            pab_id: req.params.pab_id
        },
        include: [{
            model: Aula,
            include: [{
                model: TipoAula
            }]
        }]
    }).then((resultado: any) => {
        let rpta = {
            message: "ok",
            contenido: resultado
        }
        res.status(200).json(rpta);
    })

}