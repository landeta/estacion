import { Router} from 'express'; 

import  ticketsControllers  from '../controllers/ticketsControllers';

class TicketsRoutes{
    public router: Router = Router();
    constructor(){

        this.config();
    }

    config(): void{
        this.router.get('/', ticketsControllers.list);
        this.router.get('/:id', ticketsControllers.getOne);
        this.router.post('/', ticketsControllers.create);
        this.router.put('/:id', ticketsControllers.update);
        this.router.delete('/:id', ticketsControllers.delete);
    }
    
}


const ticketsRoutes = new TicketsRoutes;
export default ticketsRoutes.router;