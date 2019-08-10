// Lugar controller
import { Request, Response } from 'express';

var unirest = require("unirest");

export let buscarLugar = (req: Request, res: Response) => {

    let busqueda = req.body.busqueda;
    let busquedaURI = encodeURI(busqueda);

    var consulta = unirest("GET",
        `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${busquedaURI}`);

    consulta.headers({
        "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
        "x-rapidapi-key": "dc8d31b41amshedb873d01ae14adp10f91cjsnd24bc4353e07"
    });

    consulta.end((respuesta: any) => {
        if (respuesta.error) {
            res.send("ERROR");
        } else {
            res.send(respuesta.body)
        }
    });
}
