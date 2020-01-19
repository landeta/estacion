import { Request, Response } from 'express';

import pool from '../database';
import { request } from 'http';

class CorrectivosControllers{

    public async list (req: Request, res: Response){
        // res.send('Correctivos');
        // const correctivos = await  pool.query('SELECT * FROM correctivos');
        // const correctivos = await  pool.query('SELECT c.id AS id, c.tk AS tk, c.ot AS ot, s.nombre AS sitio, c.falla AS falla, c.causa AS causa, c.tecno AS tecno, c.equipo AS equipo, c.ini AS ini, c.fin AS fin, c.estado AS estado, c.trabajo AS trabajo, c.contrata AS contrata, c.observa AS observa FROM correctivos c, sitios s WHERE  c.sitio = s.id');
        const correctivos = await  pool.query('SELECT c.id AS id, c.tk AS tk, c.ot AS ot, s.nombre AS sitio, c.falla AS falla, c.causa AS causa, c.tecno AS tecno, c.equipo AS equipo, c.ini AS ini, c.fin AS fin, c.estado AS estado, c.trabajo AS trabajo, c.contrata AS contrata, c.observa AS observa  FROM correctivos c, sitios s WHERE c.sitio = s.id');
        res.json(correctivos);
    }
    public async getOne(req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        const correctivo =await pool.query('SELECT s.nombre AS sitio, c.tk AS tk, c.ot AS ot, c.falla AS falla, c.causa AS causa, c.tecno AS tecno, c.equipo AS equipo, c.ini AS ini, c.fin AS fin, c.estado AS estado, c.trabajo AS trabajo, c.contrata AS contrata, c.observa AS observa, C.id AS id  FROM  correctivos c, sitios s WHERE  c.sitio = s.id AND c.id = ?', [id]);
        // const correctivo =await pool.query('SELECT * FROM correctivos WHERE  id = ?', [id]);
      
        if (correctivo.length > 0){
            return res.json(correctivo[0]);
        }
        res.status(404).json({mensaje: 'EL correctivo no existe'});
    }
    public async create(req: Request, res: Response): Promise<any>{
        await pool.query('INSERT INTO correctivos set ?', [req.body]);
        res.json({mensaje: 'Correctivos Guardados'});
    }
    public async update(req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        console.log('Esto es UPDATE body : ',req.body);
        const correctivo =await pool.query('UPDATE correctivos SET ? WHERE id = ?', [req.body, id]);
        console.log('Despues de UPDATE  : ',req.body);
        // res.json({mensaje: 'Correctivo cambiado '});
    }
    public async delete(req: Request, res: Response){
        const {id} = req.params;
        const correctivo =await pool.query('DELETE FROM correctivos WHERE id = ?', [id]);
        res.json({mensaje: 'Correctivos borrados'+ req.params.id});
    }
}

const correctivosControllers = new CorrectivosControllers;
export default correctivosControllers;