import { Router} from 'express'; 

import  getControllers  from '../controllers/getControllers';

class SitioInfoRoutes{
    public router: Router = Router();
    constructor(){

        this.config();
    }

    config(): void{
        console.log('entre en getRoutes');
        this.router.get('/contratistas', getControllers.listContratistas);
        this.router.get('/modulos', getControllers.listModulos);
        this.router.get('/equipos', getControllers.listEquipos);
    }
    
    
}


const sitioinfoRoutes = new SitioInfoRoutes;
export default sitioinfoRoutes.router;