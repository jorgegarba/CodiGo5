import { Request, Response, NextFunction } from 'express';
var jwt = require('jsonwebtoken');

export let verificarToken = (token: string) => {
    try {
        let data = jwt.verify(token, "didacticos", { algorithm: "RS256" });
        return data;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}
export let wachiman = (req: Request, res: Response, next: NextFunction) => {
    // la funcion next(); le da el pase a la siguiente funcion
    // en este caso la funcion getReservasByFechas
    if (req.headers.authorization) {
        let token = req.headers.authorization.split(" ")[1];
        let data = verificarToken(token);
        if (data) {
            next();
        } else {
            let respuesta = {
                message: "error",
                contenido: "Token inválido o expirado 😢"
            };
            res.status(403).json(respuesta);
            return;
        }
    } else {
        // en caso no se reciba el header de "Authorization"
        let respuesta = {
            message: "error",
            contenido: "No se han mandado credenciales de autenticación 😢"
        };
        res.status(403).json(respuesta);
        return;
    }
}