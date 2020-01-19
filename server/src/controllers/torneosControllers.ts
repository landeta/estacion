import { Request, Response } from 'express';


import pool from '../database';
import { request } from 'http';


class TorneosControllers{

    
    public async list (req: Request, res: Response){
        // res.send('Torneos');
        const torneos = await  pool.query('SELECT * FROM noticias');
        if (torneos.length > 0){
            res.status(200).json(torneos);
    }   else
            res.status(404).json({mensaje: 'EL torneo no existe'});
    }
    public async getOne(req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        const torneo =await pool.query('SELECT * FROM noticias WHERE id = ?', [id]);
        if (torneo.length > 0){
           res.status(200).json(torneo[0]);
        }else
            res.status(404).json({mensaje: 'EL torneo no existe'});
    }
    public async create(req: Request, res: Response): Promise<any>{
        await pool.query('INSERT INTO noticias set ?', [req.params.id]);
        res.json({mensaje: 'Torneos Guardados'});
    }
    public async update(req: Request, res: Response){
        const {id} = req.params;
        const torneo =await pool.query('UPDATE noticias set ? WHERE id = ?', [req.body, id]);
        res.json({mensaje: 'Torneo cambiado '});
    }
    public async delete(req: Request, res: Response){
        const {id} = req.params;
        const torneo =await pool.query('DELETE FROM noticias WHERE id = ?', [id]);
        res.json({mensaje: 'Torneos borrados'+ req.params.id});
    }
}

const torneosControllers = new TorneosControllers;
export default torneosControllers;