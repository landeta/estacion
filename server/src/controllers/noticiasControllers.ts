import { Request, Response } from 'express';

import pool from '../database';
import { request } from 'http';

class NoticiasControllers{

    public async list (req: Request, res: Response){
        // res.send('Noticias');
        const noticias = await  pool.query('SELECT * FROM noticias');
        res.json(noticias);
    }
    public async getOne(req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        const noticia = await pool.query('SELECT * FROM noticias WHERE id = ?', [id]);
        if (noticia.length > 0){
            return res.json(noticia[0]);
        }
        res.status(404).json({mensaje: 'EL noticia no existe'});
    }
    public async create(req: Request, res: Response): Promise<any>{
        await pool.query('INSERT INTO noticias set ?', [req.params.id]);
        res.json({mensaje: 'Noticias Guardados'});
    }
    public async update(req: Request, res: Response){
        const {id} = req.params;
        const noticia =await pool.query('UPDATE noticias set ? WHERE id = ?', [req.body, id]);
        res.json({mensaje: 'Noticia cambiado '});
    }
    public async delete(req: Request, res: Response){
        const {id} = req.params;
        const noticia =await pool.query('DELETE FROM noticias WHERE id = ?', [id]);
        res.json({mensaje: 'Noticias borrados'+ req.params.id});
    }
}

const noticiasControllers = new NoticiasControllers;
export default noticiasControllers;