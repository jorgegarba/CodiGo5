// controlador email
import { Request, Response } from 'express';
const nodemailer = require("nodemailer");

export let enviarEmail = (req: Request, res: Response) => {
    let nombre = req.params.nombre;
    enviarEmailAsync().then(id=>{
        res.send(id);
    }).catch(error=>{
        res.send(error);
    })
}

// funcion que no va ser parte del email controler
// sera una funcion tipo UTILS
let enviarEmailAsync = async () => {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'jorgegarba@gmail.com', // generated ethereal user
            pass: 'asdasdasdasd' // generated ethereal password
        }
    });
    let info = await transporter.sendMail({
        from: 'asdasdsa jorgegarba@gmail.com', // sender address
        to: "jorgegarba@gmail.com", // list of receivers
        subject: "Paga pe'", // Subject line
        text: "Hola amiguito", // plain text body
        html: "Texto en <strong>negrita</strong>" // html body
    });
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    return nodemailer.getTestMessageUrl(info);
}