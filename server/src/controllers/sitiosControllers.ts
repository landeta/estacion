import { Request, Response } from 'express';

import pool from '../database';
import { setTimeout } from 'timers';


class SitiosControllers{

    public async getOne(req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        const sitio =await pool.query('SELECT * FROM sitios WHERE id = ?', [id]);
        if (sitio.length > 0){
            return res.json(sitio[0]);
        }
        res.status(404).json({mensaje: 'EL sitio no existe'});
    }
    public async create(req: Request, res: Response): Promise<any>{
        await pool.query('INSERT INTO sitios set ?', [req.body]);
  
        res.json({mensaje: 'Sitios Guardados'});
    }
    public async update(req: Request, res: Response){
        const {id} = req.params;
        const sitio =await pool.query('UPDATE sitios set ? WHERE id = ?', [req.body, id]);
        res.json({mensaje: 'Sitio cambiado '});
    }
    public async delete(req: Request, res: Response){
        try{
            const {id} = req.params;
            const sitio =await pool.query('DELETE FROM sitios WHERE id = ?', [id]);
            res.json({mensaje: 'Sitios borrados'+ req.params.id});
        }catch(err){
            console.log("Error: ", err);

        }
    }

    public async list (req: Request, res: Response){
        // res.send('Sitios');
        try{
            const queryParams = req.query;
            const id = queryParams.id || 1 ,
              filter = queryParams.filter || '',
              sortOrder = queryParams.sortOrder,
              pageNumber = parseInt(queryParams.pageNumber) || 0,
              pageSize = parseInt(queryParams.pageSize)||1000;
            
            let words = await pool.query('SELECT * FROM sitios');
            
            // let result = Object.values(words).filter(word => `${word}.${id}`== '1' );    
            // let sitios = Object.values(x).filter( LESSONS => LESSONS.[id] == 1 );// .filter(resp => resp.id == id);
            let result = Object.values(words).filter(resp =>  resp.id >= id);//.sort((l1, l2) => l1.id - l2.id);;
            const initialPos = pageNumber * pageSize;
            const sitiosPage = result.slice(initialPos, initialPos + pageSize);
            res.json(sitiosPage );
        }catch(err){
            console.log("Error: ", err);

        }
    }
    
    public  async  searchSitios(req: Request, res: Response) { 
        
        const LESSONS =  await  pool.query('SELECT * FROM sitios');
        
        const queryParams = req.query;
        
        const id = queryParams.id,
              filter = queryParams.filter || '',
              sortOrder = queryParams.sortOrder,
              pageNumber = parseInt(queryParams.pageNumber) || 0,
              pageSize = parseInt(queryParams.pageSize);
              

        let sitios = Object.values(LESSONS);//.filter(sitio => sitio.id == id).sort((l1, l2) => l1.id - l2.id);
    
      /*  if (filter) {
           sitios = sitios.filter(sitio => sitio.nombre.trim().toLowerCase().search(filter.toLowerCase()) >= 0);
        }
        if (sortOrder == "desc") {
            sitios = sitios.reverse();
        }*/
        const initialPos = pageNumber * pageSize;
        const sitiosPage = sitios.slice(initialPos, initialPos + pageSize);
    
        
        res.json({'sitios':'lll'});
            


    }
}

const sitiosControllers = new SitiosControllers;
export default sitiosControllers;