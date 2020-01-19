import { Request, Response } from 'express';

import pool from '../database';
import { setTimeout } from 'timers';


class SitioInfoControllers{

    public async getOne(req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        const sitio =await pool.query('SELECT * FROM sitio_info WHERE id = ?', [id]);
        if (sitio.length > 0){
            return res.json(sitio[0]);
        }
        res.status(404).json({mensaje: 'EL sitio no existe'});
    }

    public async list (req: Request, res: Response){
        // res.send('Sitios');
        try{
            const queryParams = req.query;
            const id: number = queryParams.id || 1 ,
              filter = queryParams.filter || '',
              sortOrder = queryParams.sortOrder,
              pageNumber = parseInt(queryParams.pageNumber) || 0,
              pageSize = parseInt(queryParams.pageSize)||1000;
            
            let words = await pool.query('SELECT * FROM sitio_info');
            
            // let result = Object.values(words).filter(word => `${word}.${id}`== '1' );    
            // let sitioinfo = Object.values(x).filter( LESSONS => LESSONS.[id] == 1 );// .filter(resp => resp.id == id);
            let result = Object.values(words).filter(resp =>  resp.id >= id); //.sort((l1, l2) => l1.id - l2.id);;
            const initialPos = pageNumber * pageSize;
            const sitioinfoPage = result.slice(initialPos, initialPos + pageSize);
            res.json(sitioinfoPage );
        }catch(err){
            console.log("Error: ", err);

        }
    }
    
    public  async  searchSitios(req: Request, res: Response) { 
        
        const LESSONS =  await  pool.query('SELECT * FROM sitio_info');
        
        const queryParams = req.query;
        
        const id = queryParams.id,
              filter = queryParams.filter || '',
              sortOrder = queryParams.sortOrder,
              pageNumber = parseInt(queryParams.pageNumber) || 0,
              pageSize = parseInt(queryParams.pageSize);
              

        let sitioinfo = Object.values(LESSONS);//.filter(sitio => sitio.id == id).sort((l1, l2) => l1.id - l2.id);
    
      /*  if (filter) {
           sitioinfo = sitioinfo.filter(sitio => sitio.nombre.trim().toLowerCase().search(filter.toLowerCase()) >= 0);
        }
        if (sortOrder == "desc") {
            sitioinfo = sitioinfo.reverse();
        }*/
        const initialPos = pageNumber * pageSize;
        const sitioinfoPage = sitioinfo.slice(initialPos, initialPos + pageSize);
    
        
        res.json({'sitioinfo':'lll'});
            


    }

    
    public async create(req: Request, res: Response): Promise<any>{
        await pool.query('INSERT INTO sitioinfo set ?', [req.params.id]);
        res.json({mensaje: 'Sitios Guardados'});
    }
    public async update(req: Request, res: Response){
        const {id} = req.params;
        const sitio =await pool.query('UPDATE sitioinfo set ? WHERE id = ?', [req.body, id]);
        res.json({mensaje: 'Sitio cambiado '});
    }
    public async delete(req: Request, res: Response){
        try{
            const {id} = req.params;
            const sitio =await pool.query('DELETE FROM sitioinfo WHERE id = ?', [id]);
            res.json({mensaje: 'Sitios borrados'+ req.params.id});
        }catch(err){
            console.log("Error: ", err);

        }
    }

}

const sitioinfoControllers = new SitioInfoControllers;
export default sitioinfoControllers;