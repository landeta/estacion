import { Request, Response } from 'express';

import pool from '../database';

class OrdenControllers{

    //public list(req: Request, res: Response){
      //  res.json({'texto':'respiuesta al texto'});
    //}

    public async list (req: Request, res: Response){
        // res.send('Trabajos');
        const trabajos = await  pool.query('SELECT * FROM trabajos');
        res.json(trabajos);
    }
    public async getOne(req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        const trabajo =await pool.query('SELECT * FROM trabajos WHERE id = ?', [id]);
        if (trabajo.length > 0){
           res.status(200).json(trabajo[0]);
        }else
            res.status(404).json({mensaje: 'EL trabajo no existe'});
    }

}

const ordenControllers = new OrdenControllers;
export default ordenControllers;