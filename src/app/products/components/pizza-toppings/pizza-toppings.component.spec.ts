import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PizzaToppingsComponent } from './pizza-toppings.component';

describe('PizzaToppingsComponent', () => {
    let component: PizzaToppingsComponent;
    let fixture: ComponentFixture<PizzaToppingsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PizzaToppingsComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PizzaToppingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
