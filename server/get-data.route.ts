import { Request, Response } from 'express';
import { TOPPINGS, PIZZAS } from './db-data';

export function getTopping(req: Request, res: Response) {
    res.status(200).json({ payload: Object.values(TOPPINGS) });
}

export function getPizzas(req: Request, res: Response) {
    res.status(200).json({ payload: Object.values(PIZZAS) });
}
