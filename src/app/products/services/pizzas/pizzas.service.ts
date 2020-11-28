import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Pizza } from '../../models/pizza.model';
import { convertSnaps } from '../db-utils';

@Injectable()
export class PizzasService {
    constructor(private http: HttpClient) { }

    getPizzas(): Observable<Pizza[]> {
        return this.http
            .get<Pizza[]>(`/api/pizzas`)
            .pipe(
                map(snaps => convertSnaps<Pizza>(snaps)),
                catchError((error: any) => throwError(error.json()))
            );
    }

    createPizza(payload: Pizza): Observable<Pizza> {
        return this.http
            .post<Pizza>(`/api/pizzas`, payload)
            .pipe(catchError((error: any) => throwError(error.json())));
    }

    updatePizza(payload: Pizza): Observable<Pizza> {
        return this.http
            .put<Pizza>(`/api/pizzas/${payload.id}`, payload)
            .pipe(catchError((error: any) => throwError(error.json())));
    }

    removePizza(payload: Pizza): Observable<Pizza> {
        return this.http
            .delete<any>(`/api/pizzas/${payload.id}`)
            .pipe(catchError((error: any) => throwError(error.json())));
    }
}
