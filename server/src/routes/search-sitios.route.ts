


import { Request, Response} from 'express';
import pool from '../database';
import { setTimeout } from 'timers';
import sitiosControllers from '../controllers/sitiosControllers';



export function searchSitios(req: Request, res: Response) {
    const LESSONS = sitiosControllers.list;
    const queryParams = req.query;
console.log('prueba de que: ', LESSONS);
    const id = queryParams.id,
          filter = queryParams.filter || '',
          sortOrder = queryParams.sortOrder,
          pageNumber = parseInt(queryParams.pageNumber) || 0,
          pageSize = parseInt(queryParams.pageSize);

    let sitios = Object.values(LESSONS).filter(sitio => sitio.id == id).sort((l1, l2) => l1.id - l2.id);

    if (filter) {
       sitios = sitios.filter(sitio => sitio.description.trim().toLowerCase().search(filter.toLowerCase()) >= 0);
    }

    if (sortOrder == "desc") {
        sitios = sitios.reverse();
    }

    const initialPos = pageNumber * pageSize;

    const sitiosPage = sitios.slice(initialPos, initialPos + pageSize);

    setTimeout(() => {
        res.status(200).json({payload: LESSONS});
        
    },1000);


}