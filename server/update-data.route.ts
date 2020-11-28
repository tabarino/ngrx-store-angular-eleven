import { Request, Response } from 'express';
import { PIZZAS } from './db-data';

export function updatePizza(req: Request, res: Response) {
    console.log('Updating pizza ...');

    const id = req.params.id;
    const changes = req.body;

    PIZZAS[id] = {
        ...PIZZAS[id],
        ...changes
    };

    setTimeout(() => {
        res.status(200).json(PIZZAS[id]);
    }, 2000);
}
