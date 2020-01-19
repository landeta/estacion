import { Router} from 'express'; 

import  trabajosControllers  from '../controllers/trabajosControllers';

class TrabajosRoutes{
    public router: Router = Router();
    constructor(){

        this.config();
    }

    config(): void{
        this.router.get('/', trabajosControllers.list);
        this.router.get('/:id', trabajosControllers.getOne);
        this.router.post('/', trabajosControllers.create);
        this.router.put('/:id', trabajosControllers.update);
        this.router.delete('/:id', trabajosControllers.delete);
    }
    
}


const trabajosRoutes = new TrabajosRoutes;
export default trabajosRoutes.router;