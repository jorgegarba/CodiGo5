// email_router
import {Router} from 'express';
import {email_controller} from './../controllers/Email';

export const email_router = Router();

email_router.post('/enviaremail',email_controller.enviarEmail);