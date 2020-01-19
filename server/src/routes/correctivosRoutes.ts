import { Router} from 'express'; 

import  correctivosControllers  from '../controllers/correctivosControllers';

class DatosRoutes{
    public router: Router = Router();
    constructor(){

        this.config();
    }

    config(): void{
        this.router.get('/', correctivosControllers.list);
        this.router.get('/:id', correctivosControllers.getOne);
        this.router.post('/', correctivosControllers.create);
        this.router.put('/:id', correctivosControllers.update);
        this.router.delete('/:id', correctivosControllers.delete);
    }
    
}


const correctivosRoutes = new DatosRoutes;
export default correctivosRoutes.router;