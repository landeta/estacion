import { Router } from 'express';

import ordenControllers from '../controllers/ordenControllers';

class OrdenRoutes{
public router: Router = Router();
constructor(){
    this.config();
}

    config(): void{

        this.router.get('/', ordenControllers.list);
        this.router.get('/:id', ordenControllers.getOne)
    }


}

const ordenRoutes = new OrdenRoutes;
export default ordenRoutes;