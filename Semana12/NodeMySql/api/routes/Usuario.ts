// usuario rutas

import { Router } from 'express';
import * as usuario_controller from './../controllers/Usuario';

export let usuario_router = Router();
usuario_router.get('/usuarios', usuario_controller.getUsuarios);
usuario_router.post('/usuarios', usuario_controller.addUsuario);

// Buscar un usuario dado su nombre y/o apellido
usuario_router.post('/usuarios/buscar', usuario_controller.getUsuariosByName);
