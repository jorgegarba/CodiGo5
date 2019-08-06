import {Router} from 'express';
import {getPeliculas,getPeliculasDrama} from './../controllers/Pelicula';

export var pelicula_router = Router();

pelicula_router.get('/peliculas',getPeliculas);
pelicula_router.get('/peliculasdrama',getPeliculasDrama);
