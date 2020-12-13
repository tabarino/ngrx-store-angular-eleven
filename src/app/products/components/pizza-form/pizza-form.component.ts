import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Pizza } from '../../models/pizza.model';
import { Topping } from '../../models/topping.model';

@Component({
    selector: 'pizza-form',
    templateUrl: './pizza-form.component.html',
    styleUrls: ['./pizza-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PizzaFormComponent implements OnInit, OnChanges {
    @Input() pizza: Pizza;
    @Input() toppings: Topping[];
    @Output() selected = new EventEmitter<Pizza>();
    @Output() create = new EventEmitter<Pizza>();
    @Output() update = new EventEmitter<Pizza>();
    @Output() remove = new EventEmitter<Pizza>();
    exists = false;

    form = this.fb.group({
        name: ['', Validators.required],
        toppings: [[]],
    });

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
    }

    get nameControl() {
        return this.form.get('name') as FormControl;
    }

    get nameControlInvalid() {
        return this.nameControl.hasError('required') && this.nameControl.touched;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.pizza && this.pizza.id) {
            this.exists = true;
            this.form.patchValue(this.pizza);
        }
        this.form
            .get('toppings')
            .valueChanges.pipe(
                map(toppings => toppings.map((topping: Topping) => topping.id))
            )
            .subscribe(value => this.selected.emit(value));
    }

    createPizza(form: FormGroup) {
        const { value, valid } = form;
        if (valid) {
            this.create.emit(value);
        }
    }

    updatePizza(form: FormGroup) {
        const { value, valid, touched } = form;
        if (touched && valid) {
            this.update.emit({ ...this.pizza, ...value });
        }
    }

    removePizza(form: FormGroup) {
        const { value } = form;
        this.remove.emit({ ...this.pizza, ...value });
    }
}
