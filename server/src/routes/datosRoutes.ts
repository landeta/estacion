import { Router} from 'express'; 

import  datosControllers  from '../controllers/datosControllers';

class DatosRoutes{
    public router: Router = Router();
    constructor(){
console.log('datos');
        this.config();
    }

    config(): void{
        console.log('datos');
        this.router.get('/', datosControllers.list);
        this.router.get('/:id', datosControllers.getOne);
        this.router.post('/', datosControllers.create);
        this.router.put('/:id', datosControllers.update);
        this.router.delete('/:id', datosControllers.delete);
    }
    
}


const datosRoutes = new DatosRoutes;
export default datosRoutes.router;