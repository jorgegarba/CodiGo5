// pabellon router
import { Router } from 'express';
import * as aula_controller from './../controllers/Aula';

export let aula_router = Router();

aula_router.get('/aula/:aula_id', aula_controller.getAulaById);
