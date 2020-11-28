import { PizzasService } from './pizzas/pizzas.service';
import { ToppingsService } from './toppings/toppings.service';

export const services: any[] = [PizzasService, ToppingsService];

export * from './pizzas/pizzas.service';
export * from './toppings/toppings.service';
