import { Request, Response } from 'express';
import { PIZZAS } from './db-data';

export let pizzasKeyCounter = 10;

export function createPizza(req: Request, res: Response) {
    console.log('Creating new pizza ...');

    const changes = req.body;
    const newPizza = {
        id: pizzasKeyCounter,
        seqNo: pizzasKeyCounter,
        ...changes
    };

    PIZZAS[newPizza.id] = newPizza;

    pizzasKeyCounter++;

    setTimeout(() => {
        res.status(200).json(newPizza);
    }, 2000);
}

