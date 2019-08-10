// lugar router
import {Router} from 'express';
import {buscarLugar} from './../controllers/Lugar';

export let lugar_router = Router();

lugar_router.post("/lugar/buscar",buscarLugar);