import { Router} from 'express'; 

import  sitioInfoControllers  from '../controllers/sitioinfoControllers';

class SitioInfoRoutes{
    public router: Router = Router();
    constructor(){

        this.config();
    }

    config(): void{
        console.log('sitiosinfo');
        this.router.get('/', sitioInfoControllers.list);
        this.router.get('/:id', sitioInfoControllers.getOne);
        this.router.post('/', sitioInfoControllers.create);
        this.router.put('/:id', sitioInfoControllers.update);
        this.router.delete('/:id', sitioInfoControllers.delete);
        // this.router.get('/:id', sitiosControllers.searchSitios);
    }
    
}


const sitioinfoRoutes = new SitioInfoRoutes;
export default sitioinfoRoutes.router;