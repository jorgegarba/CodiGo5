import { Router } from 'express';
import { curso_controller } from './../controllers/Curso';

export const curso_router = Router();

curso_router.get('/cursos', curso_controller.getCursos);
curso_router.post('/cursos', curso_controller.createCurso);
curso_router.post('/cursos/:curso_id/addvideo', curso_controller.addVideoByCursoId);
