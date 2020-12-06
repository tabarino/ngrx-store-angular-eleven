import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromContainers from './containers';

const routes: Routes = [
    {
        path: '',
        component: fromContainers.ProductsComponent,
    },
    {
        path: 'new',
        component: fromContainers.ProductItemComponent,
    },
    {
        path: ':pizzaId',
        component: fromContainers.ProductItemComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
