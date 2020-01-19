import { Router} from 'express'; 

import  noticiasControllers  from '../controllers/noticiasControllers';

class NoticiasRoutes{
    public router: Router = Router();
    constructor(){

        this.config();
    }

    config(): void{
        console.log('noticias');
        this.router.get('/', noticiasControllers.list);
        this.router.get('/:id', noticiasControllers.getOne);
        this.router.post('/', noticiasControllers.create);
        this.router.put('/:id', noticiasControllers.update);
        this.router.delete('/:id', noticiasControllers.delete);
    }
    
}


const noticiasRoutes = new NoticiasRoutes;
export default noticiasRoutes.router;