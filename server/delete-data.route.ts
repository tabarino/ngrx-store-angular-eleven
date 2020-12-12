import { Request, Response } from 'express';
import { PIZZAS } from './db-data';

export function deletePizza(req: Request, res: Response) {
    console.log('Deleting pizza ...');

    const id = req.params.id;
    const pizza = PIZZAS[id];

    delete PIZZAS[id];

    setTimeout(() => {
        res.status(200).json({ id });
    }, 2000);
}
