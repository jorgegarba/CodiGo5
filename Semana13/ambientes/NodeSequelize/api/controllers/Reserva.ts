import { Response, Request } from "express";
import { Reserva, Aula, Usuario } from "./../config/sequelize";

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// Reserva controller

export let getReservasByFechas = (req: Request, res: Response) => {
    let { p_aula_id } = req.params;
    let { body_res_fechin, body_res_fechfin } = req.body;
    
    Reserva.findAll({
        where: {
            res_fechin: {
                [Op.gte]: body_res_fechin
            },
            res_fechfin: {
                [Op.lte]: body_res_fechfin
            },
            aula_id: p_aula_id,
        }
    }).then((resultado: any) => {
        res.status(200).json(resultado);
    })
}