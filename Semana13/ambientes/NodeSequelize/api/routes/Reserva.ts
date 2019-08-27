// reserva router
import { Router } from 'express';
import * as reserva_controller from './../controllers/Reserva';

export let reserva_router = Router();

reserva_router.post('/reservabyfechas/:p_aula_id', reserva_controller.getReservasByFechas);
