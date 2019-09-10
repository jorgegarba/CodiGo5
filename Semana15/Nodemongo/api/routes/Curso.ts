import { Router } from 'express';
import { curso_controller } from './../controllers/Curso';

export const curso_router = Router();

curso_router.get('/cursos', curso_controller.getCursos);
