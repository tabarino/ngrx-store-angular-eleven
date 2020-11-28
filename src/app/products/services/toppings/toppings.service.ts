import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Topping } from '../../models/topping.model';
import { convertSnaps } from '../db-utils';

@Injectable()
export class ToppingsService {
    constructor(private http: HttpClient) { }

    getToppings(): Observable<Topping[]> {
        return this.http
            .get<Topping[]>(`/api/toppings`)
            .pipe(
                map(snaps => convertSnaps<Topping>(snaps)),
                catchError((error: any) => throwError(error.json()))
            );
    }
}
