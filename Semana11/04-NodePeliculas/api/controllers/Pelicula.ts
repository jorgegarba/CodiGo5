import { Request, Response } from 'express';
import {peliculas,peliculasDrama} from './../fakedata/fakedata';
// export let peliculas_controller = {
//     getPeliculas: (req: Request, res: Response) => {
//         res.json([
//             {
//                 id: 1,
//                 nombre: 'Harry Potter 1'
//             },
//             {
//                 id: 2,
//                 nombre: 'Harry Potter 2'
//             }
//         ]);
//     },
//     getPeliculasDrama: (req: Request, res: Response) => {
//         res.json([
//             {
//                 id: 1,
//                 nombre: 'Drama 1'
//             },
//             {
//                 id: 2,
//                 nombre: 'Drama 2'
//             }
//         ]);
//     },
// }

export let getPeliculas = (req: Request, res: Response) => {
    res.json(peliculas);
};
export let getPeliculasDrama = (req: Request, res: Response) => {
    res.json(peliculasDrama);
}