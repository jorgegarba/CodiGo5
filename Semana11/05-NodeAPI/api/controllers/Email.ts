// email_controller
import { Request, Response } from 'express';
import { SENDGRID_API_KEY } from './../../environments';

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(SENDGRID_API_KEY);


export const email_controller = {
    // req: Peticion que viene del cliente
    // res: Respuesta que se le envia al cliente
    enviarEmail: (req: Request, res: Response) => {
        
        
        const msg = {
            to: req.body.para,
            from: 'jorgegarba@gmail.com',
            subject: req.body.asunto,
            text: req.body.texto,
            html: req.body.contenido,
        };
        sgMail.send(msg)
            .then((rpta: any) => {
                res.json({
                    status:'ok',
                    message:'Correo enviado correctamente'
                })
            }).catch((error:any)=>{
                res.json({
                    status:'error',
                    message:'Error al enviar el correo'
                })
            })
    }
}