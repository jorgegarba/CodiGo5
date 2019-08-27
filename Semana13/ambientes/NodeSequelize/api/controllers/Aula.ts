import { Request, Response } from "express";
import { Aula, Pabellon, TipoAula } from "./../config/sequelize";



export let getAulaById = (req: Request, res: Response) => {

    Aula.findAll({
        where: {
            aula_id: req.params.aula_id
        },
        include: [{
            model: Pabellon,
        }, {
            model: TipoAula
        }]
    }).then((resultado: any) => {
        let rpta = {
            message: 'ok',
            contenido: resultado
        };
        res.status(200).json(rpta);
    })
}