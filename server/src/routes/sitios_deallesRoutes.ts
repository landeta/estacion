import { Router} from 'express'; 

import  sitiosDetallesControllers  from '../controllers/sitioInfoControllers';

class DatosDetallesRoutes{
    public router: Router = Router();
    constructor(){

        this.config();
    }

    config(): void{
        console.log('sitios');
        this.router.get('/', sitiosDetallesControllers.list);
        this.router.get('/:id', sitiosDetallesControllers.getOne);
        this.router.post('/', sitiosDetallesControllers.create);
        this.router.put('/:id', sitiosDetallesControllers.update);
        this.router.delete('/:id', sitiosDetallesControllers.delete);
        // this.router.get('/:id', sitiosControllers.searchSitios);
    }
    
}


const sitiosDetallesRoutes = new DatosDetallesRoutes;
export default sitiosDetallesRoutes.router;