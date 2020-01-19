import { Request, Response } from 'express';

import pool from '../database';
import { request } from 'http';

class GetControllers{

    public async listContratistas (req: Request, res: Response){
        // res.send('Datos');
        const datos = await pool.query('SELECT * FROM contratistas');
        res.json(datos);
    }
    public async listModulos (req: Request, res: Response){
        // res.send('Datos');
        const datos = await pool.query('SELECT * FROM modulos');
        res.json(datos);
    }
    public async listEquipos (req: Request, res: Response){
        // res.send('Datos');
        const datos = await pool.query('SELECT * FROM equipos');
        res.json(datos);
    }
    
}

const getControllers = new GetControllers;
export default getControllers;