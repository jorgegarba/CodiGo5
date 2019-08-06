import {Request, Response} from 'express';

export let miruta = (req:Request,res:Response)=>{
    res.json({nombre:'Jorge',apellido:'Garnica'});
}

export let index = (req:Request,res:Response)=>{    
    console.log("Alguien xxxxxxxxxxd");
    res.send("<h1>Hola Mundo</h1>");
}