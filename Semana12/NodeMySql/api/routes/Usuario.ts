// usuario rutas

import { Router } from 'express';
import { getUsuarios } from './../controllers/Usuario';

export let usuario_router = Router();
usuario_router.get('/usuarios', getUsuarios);