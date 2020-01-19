import { Router} from 'express'; 

import  sitiosControllers  from '../controllers/sitiosControllers';

class DatosRoutes{
    public router: Router = Router();
    constructor(){

        this.config();
    }

    config(): void{
        console.log('sitios');
        this.router.get('/', sitiosControllers.list);
        this.router.get('/:id', sitiosControllers.getOne);
        this.router.post('/', sitiosControllers.create);
        this.router.put('/:id', sitiosControllers.update);
        this.router.delete('/:id', sitiosControllers.delete);
        // this.router.get('/:id', sitiosControllers.searchSitios);
    }
    
}


const sitiosRoutes = new DatosRoutes;
export default sitiosRoutes.router;