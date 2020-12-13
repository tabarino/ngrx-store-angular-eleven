import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromContainers from './containers';
import * as fromGuards from './guards';

const routes: Routes = [
    {
        path: '',
        canActivate: [fromGuards.PizzasGuard],
        component: fromContainers.ProductsComponent,
    },
    {
        path: 'new',
        canActivate: [fromGuards.PizzasGuard],
        component: fromContainers.ProductItemComponent,
    },
    {
        path: ':pizzaId',
        canActivate: [fromGuards.PizzasExistsGuard],
        component: fromContainers.ProductItemComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
