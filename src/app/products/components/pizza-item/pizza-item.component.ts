import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'pizza-item',
    templateUrl: './pizza-item.component.html',
    styleUrls: ['./pizza-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PizzaItemComponent implements OnInit {
    @Input() pizza: any;

    constructor() { }

    ngOnInit(): void {
    }
}
