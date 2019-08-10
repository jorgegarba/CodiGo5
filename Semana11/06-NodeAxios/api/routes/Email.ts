// router email
// crear la lista de rutas y las funciones de cada ruta

import {Router} from 'express';
import {enviarEmail} from './../controllers/Email';

export let email_router = Router();

email_router.post('/enviaremail/:nombre',enviarEmail);