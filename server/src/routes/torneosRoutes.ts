import { Router} from 'express'; 

import  torneosControllers  from '../controllers/torneosControllers';

class TorneosRoutes{
    public router: Router = Router();
    constructor(){

        this.config();
    }

    config(): void{
        console.log('torneos');
        this.router.get('/', torneosControllers.list);
        this.router.get('/:id', torneosControllers.getOne);
        this.router.post('/', torneosControllers.create);
        this.router.put('/:id', torneosControllers.update);
        this.router.delete('/:id', torneosControllers.delete);
    }
    
}


const torneosRoutes = new TorneosRoutes;
export default torneosRoutes.router;