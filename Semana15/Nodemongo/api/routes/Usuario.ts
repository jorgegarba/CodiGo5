import { Router } from 'express';
import { createUser } from './../controllers/Usuario';

export const usuario_router = Router();

usuario_router.post('/usuario', createUser);