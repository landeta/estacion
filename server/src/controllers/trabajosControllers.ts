import { Request, Response } from 'express';


import pool from '../database';
import { request } from 'http';


class TrabajosControllers{

    
    public async list (req: Request, res: Response){
        // res.send('Trabajos');
        const trabajos = await  pool.query('SELECT * FROM trabajos');
        res.json(trabajos);
    }
    public async getOne(req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        const trabajo =await pool.query('SELECT * FROM trabajos WHERE ot = ?', [id])
        if (trabajo.length > 0){
           res.status(200).json(trabajo[0]);
        }else
            res.status(404).json({mensaje: 'EL trabajo no existe'});
    }
    public async create(req: Request, res: Response): Promise<any>{
        await pool.query('INSERT INTO trabajos set ?', [req.params.id]);
        res.json({mensaje: 'Trabajos Guardados'});
    }
    public async update(req: Request, res: Response){
        const {id} = req.params;
        const trabajo =await pool.query('UPDATE trabajos set ? WHERE id = ?', [req.body, id]);
        res.json({mensaje: 'Trabajo cambiado '});
    }
    public async delete(req: Request, res: Response){
        const {id} = req.params;
        const trabajo =await pool.query('DELETE FROM trabajos WHERE id = ?', [id]);
        res.json({mensaje: 'Trabajos borrados'+ req.params.id});
    }
}

const trabajosControllers = new TrabajosControllers;
export default trabajosControllers;