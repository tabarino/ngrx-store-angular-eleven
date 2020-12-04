import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsRoutingModule } from './products-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromServices from './services';

@NgModule({
    declarations: [
        ...fromContainers.containers,
        ...fromComponents.components
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        ProductsRoutingModule,
        StoreModule.forFeature('products', reducers),
        EffectsModule.forFeature(effects)
    ],
    exports: [
        ...fromContainers.containers,
        ...fromComponents.components
    ],
    providers: [
        ...fromServices.services
    ],
})
export class ProductsModule { }
