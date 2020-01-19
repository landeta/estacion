import { Request, Response } from 'express';

class IndexControllers{

    index (req: Request, res: Response){
        //res.send('Hola ');
        res.json({text: 'API Is /api/datos'});
    }
}

export const indexControllers = new IndexControllers;