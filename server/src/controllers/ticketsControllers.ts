import { Request, Response } from 'express';


import pool from '../database';
import { request } from 'http';


class TicketsControllers{

    
    public async list (req: Request, res: Response){
        // res.send('Tickets');
        const tickets = await  pool.query('SELECT * FROM tickets');
        if (tickets.length > 0){
            res.status(200).json(tickets);
         }else
             res.status(404).json({mensaje: 'EL ticket no existe'});
    }
    public async getOne(req: Request, res: Response): Promise<any>{
        console.log('vemos que le llego:...', req.params);
        const {id} = req.params;
        const ticket =await pool.query('SELECT * FROM tickets WHERE tk = ?', [id])
        if (ticket.length > 0){
           res.status(200).json(ticket[0]);
        }else
            res.status(404).json({mensaje: 'EL ticket no existe'});
    }

    public async create(req: Request, res: Response): Promise<any>{
        await pool.query('INSERT INTO tickets set ?', [req.body]);
        res.json({mensaje: 'Tickets Guardados'});
    }
    
    public async update(req: Request, res: Response){
        const {id} = req.params;
        const ticket =await pool.query('UPDATE tickets set ? WHERE tk = ?', [req.body, id]);
        res.json({mensaje: 'Ticket cambiado '});
    }
    public async delete(req: Request, res: Response){
        const {id} = req.params;
        const ticket =await pool.query('DELETE FROM tickets WHERE id = ?', [id]);
        res.json({mensaje: 'Tickets borrados'+ req.params.id});
    }
}

const ticketsControllers = new TicketsControllers;
export default ticketsControllers;