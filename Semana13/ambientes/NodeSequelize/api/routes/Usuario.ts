// usuario router
import { Router } from 'express';
import * as usuario_controller from './../controllers/Usuario';

export let usuario_router = Router();

usuario_router.post('/usuario', usuario_controller.createUser);
usuario_router.post('/usuario/find', usuario_controller.findUserByNomOApe);
usuario_router.post('/usuario/loggin', usuario_controller.iniciarSesion);