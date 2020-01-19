import { Request, Response } from 'express';

import pool from '../database';
import { request } from 'http';

class DatosControllers{

    public async list (req: Request, res: Response){
        // res.send('Datos');
        const datos = await pool.query('SELECT * FROM datos');
        res.json(datos);
    }
    public async getOne(req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        const dato =await pool.query('SELECT * FROM datos WHERE id = ?', [id]);
        if (dato.length > 0){
            return res.json(dato[0]);
        }
        res.status(404).json({mensaje: 'EL dato no existe'});
    }
    public async create(req: Request, res: Response): Promise<any>{
        await pool.query('INSERT INTO datos set ?', [req.params.id]);
        res.json({mensaje: 'Datos Guardados'});
    }
    public async update(req: Request, res: Response){
        const {id} = req.params;
        const dato =await pool.query('UPDATE datos set ? WHERE id = ?', [req.body, id]);
        res.json({mensaje: 'Dato cambiado '});
    }
    public async delete(req: Request, res: Response){
        const {id} = req.params;
        const dato =await pool.query('DELETE FROM datos WHERE id = ?', [id]);
        res.json({mensaje: 'Datos borrados'+ req.params.id});
    }
}

const datosControllers = new DatosControllers;
export default datosControllers;