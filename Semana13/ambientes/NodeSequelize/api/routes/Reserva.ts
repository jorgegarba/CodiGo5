// reserva router
import { Router } from 'express';
import { wachiman } from './../utils/Guards';
import * as reserva_controller from './../controllers/Reserva';
export let reserva_router = Router();

reserva_router.post('/reservabyfechas/:p_aula_id', wachiman, reserva_controller.getReservasByFechas);